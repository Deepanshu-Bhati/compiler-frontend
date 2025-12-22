"use client";
import { createContext, useRef, useState } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

type MessageHandler = (data: string) => void;
type CloseHandler   = () => void;

type WebSocketHandlers = {
  onOpen?: () => void;
  onMessage?: (event: MessageEvent) => void;
  onClose?: () => void;
  onError?: (event: Event) => void;
};

type socketContextType = {
  socketRef: React.MutableRefObject<WebSocket | null>;
  setOnMessage: (handler: MessageHandler) => void;
  setOnClose: (handler: CloseHandler) => void;
  connect: (url: string, handlers?: WebSocketHandlers) => void;
  disconnect: () => void;
  send: (data: string) => void;
};

export const WebSocketContext = createContext<socketContextType | null>(null);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const socketRef = useRef<WebSocket | null>(null);
  const messageHandlerRef = useRef<MessageHandler | null>(null);
  const closeHandlerRef = useRef<CloseHandler | null>(null);   // << added ref

  const connect = (url: string, handlers?: WebSocketHandlers) => {
    if (socketRef.current) socketRef.current.close();

    const socket = new WebSocket(url);

    // system handlers
    if (handlers?.onOpen) socket.onopen = handlers.onOpen;
    if (handlers?.onError) socket.onerror = handlers.onError;

    socket.onmessage = (event) => {
      handlers?.onMessage?.(event);  // backend message callback
      messageHandlerRef.current?.(event.data); // user-defined
    };

    socket.onclose = () => {
      handlers?.onClose?.();     // user passed to connect()
      closeHandlerRef.current?.(); // setOnClose listener
    };

    socketRef.current = socket;
  };

  const setOnMessage = (handler: MessageHandler) => {
    messageHandlerRef.current = handler;
  };

  const setOnClose = (handler: CloseHandler) => {
    closeHandlerRef.current = handler;
  };

  const send = (data: string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(data);
    }
  };

  const disconnect = () => {
    socketRef.current?.close();
    socketRef.current = null;
  };

  return (
    <WebSocketContext.Provider
      value={{
        socketRef,
        send,
        connect,
        setOnMessage,
        setOnClose,   // << exposed properly
        disconnect,
      }}
    >
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </WebSocketContext.Provider>
  );
}
