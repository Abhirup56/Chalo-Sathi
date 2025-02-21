import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

// console.log(process.env.MONGODB_URI);
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5002, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed: ", error);
    process.exit(1);
  });