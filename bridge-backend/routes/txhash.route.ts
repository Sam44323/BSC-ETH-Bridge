import { Router } from "express";
import { mintBSC, mintETH } from "../controllers/txhash.controller";

const router = Router();
router.post("/mint-bsc", mintBSC);
router.post("/mint-eth", mintETH);
