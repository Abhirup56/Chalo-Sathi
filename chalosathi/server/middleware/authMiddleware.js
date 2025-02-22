import { verifyToken } from "@clerk/backend";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decoded = await verifyToken(token, {
        jwtKey: process.env.CLERK_JWT_KEY,
      });

      if (!decoded) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }
      req.user = decoded; 
      req.auth = { userId: decoded.sub }; 
      next();
    } catch (error) {
      console.error("Token Verification Error:", error);
      return res.status(401).json({ message: "Unauthorized: Token verification failed" });
    }
  } catch (error) {
    console.error("Auth error:", error);
    res.status(401).json({ message: "Unauthorized: Token verification failed" });
  }
};