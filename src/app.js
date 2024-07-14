import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "redis";

import router from "./route/index.js";

dotenv.config();
const app = express();

export const redis = createClient();
await redis.connect();


app.use(cors());
app.use(express.json())
app.use(router);

export default app;