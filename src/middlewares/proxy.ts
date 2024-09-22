import { options } from '../options';
import { cacheResponse } from '../util';
import type { NextFunction, Request, Response } from 'express';

export const proxy = async (req: Request, res: Response, _: NextFunction) => {
    // Skip favicon requests
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).send();
        return;
    }
    
    try {
        const response = await fetch(`${options.origin}${req.originalUrl}`);
        const body = await response.json();
        
        await cacheResponse(req, res, body);
        res.send(body);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
};