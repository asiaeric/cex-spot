export interface WebSocketParams {
  op: string;
  args: any[];
}

export interface WebSocketMessage {
  stream: string;
  wsTime: number;
  data: any;
}
