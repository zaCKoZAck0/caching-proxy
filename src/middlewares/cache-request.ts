import type { NextFunction, Request, Response } from "express";
import cache from '../config/local-cache'
import chalk from "chalk";

export const cacheReq = async (req: Request, res: Response, next: NextFunction) => {
    const key = req.originalUrl;
    try {
        const cachedResponse = cache.get(key);
        if (cachedResponse) {
            res.setHeader("X-Cache", "HIT")
            console.log(
                chalk.bold.green("HIT"),
                chalk.cyanBright(key)
            )
            res.send(JSON.parse(cachedResponse))
        }
        else {
            res.setHeader("X-Cache", "MISS")
            console.log(
                chalk.bold.yellow("MISS"),
                chalk.cyanBright(key)
            )
            next()
        }
    } catch (error){
        console.error('Cache error:', error);
        res.setHeader("X-Cache", "MISS")
        console.log(
            chalk.bold.yellow("MISS"),
            chalk.cyanBright(key)
        )
        next();
    }
}