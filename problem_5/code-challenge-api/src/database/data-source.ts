import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { CodeChallenge } from "../entities/code-challenge.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + "/../entities/*.entity.ts"],
  synchronize: true, // set to false in production
});
