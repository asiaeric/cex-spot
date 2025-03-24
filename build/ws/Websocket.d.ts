declare class CEXWebSocket {
    private static instance;
    private ws;
    private readonly subscriptions;
    isConnected: boolean;
    private errorCallback?;
    private static readonly RETRY_DELAY;
    private static readonly RETRY_ATTEMPTS;
    private static readonly PING_INTERVAL;
    private pingIntervalId;
    private static readonly RECONNECT_INTERVAL;
    private static readonly WEBSOCKET_URL;
    private connectionListeners;
    private reconnectIntervalId;
    private constructor();
    static getInstance(): CEXWebSocket;
    private initializeWebSocket;
    setErrorCallback(callback: (error: any) => void): void;
    addConnectionListener(listener: (isConnected: boolean) => void): void;
    removeConnectionListener(listener: (isConnected: boolean) => void): void;
    subscribe(topic: string, callback: (message: any) => void, method?: string): void;
    unsubscribe(topic: string, method?: string): void;
    reconnect(): void;
    close(): Promise<void>;
    private readonly handleOpen;
    private readonly handleMessage;
    private readonly handleClose;
    private readonly handleError;
    private handleMessageDispatch;
    private sendSocketMessage;
    private startPingPong;
    private stopPingPong;
    private resubscribeAll;
    private unsubscribeAll;
    private notifyConnectionListeners;
}
export default CEXWebSocket;
//# sourceMappingURL=Websocket.d.ts.map