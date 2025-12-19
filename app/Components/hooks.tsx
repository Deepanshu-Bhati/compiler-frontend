import { useContext } from "react";
import { ThemeContext, WebSocketContext } from "../Provider";

export function useTheme() {
  return useContext(ThemeContext);
}


export function useHook(){
  const ctx=useContext(WebSocketContext);
  if(!ctx){
    throw new Error("websocket is not exist");

  }
  return ctx;
}



