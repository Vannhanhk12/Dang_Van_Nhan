import "reflect-metadata";
import { AppDataSource } from "../database/data-source";
import { seedCodeChallenges } from "./code-challenge-seed";

AppDataSource.initialize()
  .then(async () => {
    await seedCodeChallenges();
    process.exit();
  })
  .catch(error => console.log("Database connection error: " + error));
