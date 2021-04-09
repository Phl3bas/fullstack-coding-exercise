import http from "http";
import { AddressInfo } from "node:net";
import app from "./app";

const server: http.Server = http.createServer(app);

const port = 8000;

server.listen(port);

server.on("listening", () => {
  if (process.env.NODE_ENV !== "production") {
    console.log("listening on port:" + port);
  }
});
