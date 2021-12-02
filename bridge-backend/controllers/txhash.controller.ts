import express from "express";
import logger from "../utils/logger";

export const mintETH = (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json({
      message: "working!",
    });
  } catch (err: any) {
    logger.error(`Can't fetch the colleges at this moment: ${err.message}`);
    res.status(500).json({
      message: "Can't get the colleges at this moment!",
    });
  }
};

export const mintBSC = (req: express.Request, res: express.Response) => {
  try {
    res.status(200).json({
      message: "working!",
    });
  } catch (err: any) {
    logger.error(`Can't fetch the colleges at this moment: ${err.message}`);
    res.status(500).json({
      message: "Can't get the colleges at this moment!",
    });
  }
};
