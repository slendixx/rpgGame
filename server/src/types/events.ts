export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (message: string) => void;
  withAcknowledge: (
    message: string,
    callback: (responseMessage: string) => void
  ) => void;
}
export interface ClientToServerEvents {
  basicEmit: (message: string) => void;
}
export interface InterServerEvents {
  ping: () => void;
}
export interface SocketData {
  name: string;
  age: number;
}
