import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import { t as toNodeListener, d as destr, u as useRuntimeConfig, a as trapUnhandledNodeErrors, s as setupGracefulShutdown, b as useNitroApp } from './chunks/_/nitro.mjs';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import express from 'express';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

// Es方式获取dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();

// const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
let server = express()

server.use(express.static(__dirname + '/../public'));
server.use(toNodeListener(nitroApp.h3App))

// 如果有证书，则添加证书
if (cert && key) {
  server = new Server({ key, cert }, server);
}

const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export default server;
//# sourceMappingURL=index.mjs.map
