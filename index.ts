import {Server} from "./src/Http/Server";

const server = new Server((req,res) => {
  res.writeHead(200);
  res.end("My first server!");
})

server.init()