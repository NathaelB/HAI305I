import { RequestListener,createServer,Server as HttpServer } from 'http'

export class Server {
  private webServer:  HttpServer
  private host: string = 'localhost'
  private port: number = 3333

  constructor(handler: RequestListener) {
    this.webServer = createServer(handler)
  }

  public init () {
    this.webServer.listen(this.port, this.host)
    console.log(`Listen to ${this.port} `)
  }

}