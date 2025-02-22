import express from "express";
import { Webhook } from "svix";
import User from "../models/User.models.js";

const router = express.Router();

// Webhook handler
router.post("/clerk-webhook", express.json(), async (req, res) => {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!SIGNING_SECRET) {
    console.error("Missing Clerk Webhook Secret.");
    return res.status(500).json({ error: "Missing Clerk Webhook Secret" });
  }

  const headers = req.headers;

  // Retrieve Svix headers (ensure case-sensitivity matches your Svix setup)
  const svix_id = headers["svix-id"];
  const svix_timestamp = headers["svix-timestamp"];
  const svix_signature = headers["svix-signature"];

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ error: "Missing Svix headers" });
  }

  const payload = req.body;

  try {
    // Verify webhook using Svix
    const wh = new Webhook(SIGNING_SECRET);
    const evt = wh.verify(JSON.stringify(payload), {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });

    const { type, data } = evt;

    console.log(`✅ Webhook received: ${type}`);

    // Handle user events
    if (type === "user.created") {
      if (!data.id) {
        console.error("❌ Error: Missing Clerk user ID in webhook payload.");
        return res.status(400).json({ error: "Missing Clerk user ID" });
      }

      await User.create({
        clerkUserId: data.id,
        name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
        email: data.email_addresses?.[0]?.email_address || "",
        phone: data.phone_numbers?.[0]?.phone_number || null,
        userType: data.public_metadata?.userType || "Rider",
      });

      console.log("✅ User Created:", data.id);
    } else if (type === "user.updated") {
      await User.findOneAndUpdate(
        { clerkUserId: data.id }, // Use clerkUserId for consistency
        {
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          email: data.email_addresses?.[0]?.email_address || "",
          phone: data.phone_numbers?.[0]?.phone_number || null,
          userType: data.public_metadata?.userType || "Rider",
        }
      );
      console.log("✅ User Updated:", data.id);
    } else if (type === "user.deleted") {
      await User.findOneAndDelete({ clerkUserId: data.id }); // Use clerkUserId
      console.log("✅ User Deleted:", data.id);
    }

    return res.status(200).json({ message: "Webhook processed successfully" });
  } catch (error) {
    console.error("🚨 Webhook verification failed:", error);
    return res.status(400).json({ error: "Webhook verification failed" });
  }
});


export default router;