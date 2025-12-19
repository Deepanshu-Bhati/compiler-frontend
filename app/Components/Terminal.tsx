"use client"    
import { useRef ,useEffect} from "react"
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { useHook } from "./hooks";
// import "xterm/css/xterm.css";
// import { send } from "process";


export function Clean(){

}

export default function TerminalArea(){
    const termref=useRef<HTMLDivElement | null>(null);
    const terminal=useRef<Terminal | null>(null);
    const{setOnMessage,send} =useHook();
    useEffect(()=>{
        if(!termref.current) return;
        const term=new Terminal({
            cursorBlink:true,
            fontSize:14,
            theme:{
                background:"#000000",
                foreground:"#00ff00"
            }
        })
        const fitAddon=new FitAddon();
        term.loadAddon(fitAddon);
        term.open(termref.current);
        fitAddon.fit();
        term.focus()
        term.writeln("connected  to backend ");
        setOnMessage((data)=>{
            term.write(data)
            term.reset()
            term.write("\n")
        })
        let buffer ="";
        term.onData((data) => {


            if (data === '\r' || data === ' ') {
                const trimmed = buffer.trim();
                if (data === '\r') {
                
                    if (trimmed === "clear") {
                        term.reset();
                        buffer = "";
                        return;
                    }
                
                    
                }
                let payload;
        
                if (/^".*"$/.test(trimmed)) {  
                    payload = { type: "string", value: trimmed.slice(1, -1) };
                } 
                else if (/^-?\d+$/.test(trimmed)) { 
                    payload = { type: "number", value: Number(trimmed) };
                } 
                else {
                    payload = { type: "string", value: trimmed };
                }
        
                send(JSON.stringify(payload));  
                term.write(data === '\r' ? "\r\n" : " ");  
                buffer = "";
                return;
            }
        
            buffer += data;
            term.write(data);
        });
        
          
        terminal.current=term;
        return ()=>{
            buffer = "";

            
            if (terminal.current) {
                terminal.current.reset();  
                terminal.current.dispose();
                terminal.current = null; 

            }

           

        }       

    },[])    
    return(<>
    <div ref={termref} className="h-full w-full bg-black text-amber-50"></div>
    </>)
}   