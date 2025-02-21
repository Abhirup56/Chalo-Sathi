import express from "express";
import User from "../models/User.models.js";

const router = express.Router();

// GET /api/users/:clerkUserId
// Check if user exists in the database
router.get("/:clerkUserId", async (req, res) => {
  try {
      const { clerkUserId } = req.params;
    //   console.log("Searching for user:", clerkUserId);
      const user = await User.findOne({ clerkUserId });
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
  } catch (error) {
      console.error("Error checking user:", error);
      res.status(500).json({ message: "Server error" });
  }
});

// Create user
router.post("/create", async (req, res) => {
    try {
        const { clerkUserId, name, email, phoneNumber, userType } = req.body;
        // Check required fields
        if (!clerkUserId || !name || !email) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // Check if user already exists
        let existingUser = await User.findOne({ clerkUserId });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user
        const newUser = new User({
            clerkUserId,
            name,
            email,
            phoneNumber,
            userType,
        });
        await newUser.save();
        res
            .status(201)
            .json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// Update user
router.put("/update", async (req, res) => {
    try {
        const { clerkUserId, name, userType } = req.body;

        // Ensure required fields are present
        if (!clerkUserId || !name || !userType) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Update only name and userType
        const updatedUser = await User.findOneAndUpdate(
            { clerkUserId },
            { name, userType }, 
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Server error" });
    }
});


export default router;