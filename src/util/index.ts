import cache from "../config/local-cache";
import { options } from "../options";
import type { Request, Response } from "express";

export const cacheResponse = async (req: Request, _: Response, body: any) => {
    const key = req.originalUrl;
    cache.set(key, options.cacheTtl, JSON.stringify(body));
  };