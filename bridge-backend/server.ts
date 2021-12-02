import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./utils/logger";
import { router as MinterRoutes } from "./routes/minter.route";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(MinterRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => logger.info(`Server started on port ${port}`));
