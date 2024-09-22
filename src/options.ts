import { program } from "commander";

program
    .option('-p, --port <number>', 'Port on which the caching proxy server will run', '3000')
    .option('-o, --origin <url>', 'URL of the server to which the requests will be forwarded.')
    .option('-ttl, --cache-ttl <number>', 'Cache expiry time in MS', '3600')
    .option('-clr, --clear-cache', 'Clear all the cached responses')
    .parse(process.argv)

export const options = program.opts()
