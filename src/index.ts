#!/usr/bin/env bun
import path from 'path';
import app from './app';
import { options } from "./options";
import chalk from "chalk";
import cache from './config/local-cache';

const PORT = parseInt(options.port)

if (options.clearCache) {
    cache.clear()
    console.log(
        chalk.bold.green("SUCCESS"),
        chalk.gray("Cache Cleared")
    )
}

if (options.origin){
app.listen(PORT, ()=>{
    console.log(
        chalk.green("Proxy Server Running")
    )
    console.log(
        chalk.bold.cyanBright("PORT"),
        chalk.gray(PORT)
    )
    console.log(
        chalk.bold.cyanBright("Origin Server"),
        chalk.gray(options.origin)
    )
})
}
