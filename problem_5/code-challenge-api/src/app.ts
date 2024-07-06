import express from "express";
import { AppDataSource } from "./database/data-source";
import codeChallengeRoutes from "./routes/code-challenge.route";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Initialize the database connection
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    // Use code challenge routes
    app.use("/api", codeChallengeRoutes);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Error during Data Source initialization", err);
  });
