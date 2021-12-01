import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./utils/logger";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => logger.info(`Server started on port ${port}`));
