import express from "express";
import { cacheReq } from "./middlewares/cache-request";
import { proxy } from "./middlewares/proxy";


const app = express()

app.use(cacheReq, proxy)

export default app;