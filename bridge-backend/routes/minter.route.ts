import { Router } from "express";
import { mintBSC, mintETH } from "../controllers/txhash.controller";

export const router = Router();

router.post("/mint-bsc", mintBSC);
router.post("/mint-eth", mintETH);
