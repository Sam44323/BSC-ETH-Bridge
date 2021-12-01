import { Router } from "express";
import { verifyHash } from "../controllers/txhash.controller";

const router = Router();
router.post("/verify-hash", verifyHash);
