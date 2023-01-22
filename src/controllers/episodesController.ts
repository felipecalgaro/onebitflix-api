import { Request, Response } from "express";
import path from "node:path";
import fs from "node:fs";
import { episodeService } from "../services/episodeService";

export const episodesController = {
  stream: async (req: Request, res: Response) => {
    const { videoUrl } = req.query;

    try {
      if (typeof videoUrl !== "string")
        throw new Error("videoUrl param must be of type string");

      const range = req.headers.range;

      episodeService.streamEpisodeToResponse(res, videoUrl, range);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
