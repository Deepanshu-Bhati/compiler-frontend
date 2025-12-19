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
type SocketHandlers = {
  onOpen?: () => void;
  onMessage?: (event: MessageEvent) => void;
  onClose?: () => void;
  // onMessageHandler:(handler:MessageHandler)=>void;
  onError?: (event: Event) => void;
};

type MessageHandler=(data:string)=>void;
type socketContextType={
socketRef:React.MutableRefObject<WebSocket|null>;
setOnMessage:(handler:MessageHandler)=>void;
connect:(url:string,handlers:SocketHandlers) =>void;
disconnect:()=>void;
send:(data:string)=>void;

}


export const WebSocketContext=createContext<socketContextType|null>(null);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");  
  const socketRef=useRef<WebSocket|null>(null);
  const messageHandlerref=useRef<MessageHandler |null>(null);


  
  const connect=(url:string,handlers?:{
    onOpen? :()=>void;
    onMessage?:(e:MessageEvent)=>void;
    onClose?:()=>void
    onError?:(e:Event) =>void;
  })=>{
    if(socketRef.current){
      socketRef.current.close();
    }
    const socket=new WebSocket(url);
    if(handlers?.onOpen) socket.onopen=handlers.onOpen;
    if(handlers?.onMessage) socket.onmessage=handlers.onMessage;
    if(handlers?.onClose) socket.onclose=handlers.onClose;
    if(handlers?.onError) socket.onerror=handlers.onError;
    socket.onmessage=(event)=>{
      console.log("message received")
      messageHandlerref.current?.(event.data);
    }
    socketRef.current=socket;
  }



  const setOnMessage=(handler:MessageHandler)=>{
    messageHandlerref.current=handler
  }



  const send=(data:string)=>{
    if(socketRef.current?.readyState==WebSocket.OPEN){
      socketRef.current.send(data);
    }
  }




  const disconnect=()=>{
    socketRef.current?.close();
    socketRef.current=null;
  }

  return (
    <WebSocketContext.Provider value={{socketRef,send,connect,setOnMessage,disconnect}}>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
    </WebSocketContext.Provider>
  );
}
