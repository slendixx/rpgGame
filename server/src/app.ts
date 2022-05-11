import GameServer from "./models/engine/gameServer";

const port = Number(process.env.PORT ?? 3000);
const gameServer = new GameServer(port);
