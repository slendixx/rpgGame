import { Server as SocketIOServer } from "socket.io";
import Game from "./game";
import * as events from "../../types/events";

class GameServer {
  private io: SocketIOServer;
  private port: number;
  private game: Game;

  constructor(port: number) {
    this.port = port;
    this.io = new SocketIOServer<
      events.ClientToServerEvents,
      events.ServerToClientEvents,
      events.InterServerEvents,
      events.SocketData
    >({
      cors: {
        origin: "http://localhost:8080",
      },
    });

    this.registerEvents();
    this.game = new Game();

    this.listen();
  }

  private registerEvents() {
    this.io.on("connection", (socket) => {
      console.log(socket.id);

      socket.emit("hello", "world");
    });
    //call the Game register event functions
  }

  private listen() {
    this.io.listen(this.port);
    console.log("Game server started on port: " + this.port);
  }
}

export default GameServer;
