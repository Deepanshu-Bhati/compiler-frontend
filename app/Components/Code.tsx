"use client";
import { useContext, useRef, useState } from "react";
import { useHook, useTheme } from "./hooks";
import axios from "axios";
import { WebSocketContext } from "../Provider";
import TerminalArea from "./Terminal";

export default function Code() {
  const { theme } = useTheme();
  const [lang, setLang] = useState("java");
  const [code, setCode] = useState("");
  const [output,setOutput]=useState();
  const {connect,socketRef}=useHook();
  // const {socketRef}=useHook();
  const [input,setInput]=useState("");
  
  const Languages = [
    
    "Cpp",
    "Python",
    "C#",
    "Rust",
    "Go",
    "Javascript",
    "TypeScript",
  ];

  const compile=async ()=>{

    const base=process.env.NEXT_PUBLIC_BACKEND_URL
      if(!base) return;
      
        
        let res = await axios.post(`${base}compile`, {
          language: lang,
          code: code
        }, {
          headers: { "Content-Type": "application/json" }
        })
        
          const id=res.data;
          const wsUrl = base.replace("http", "ws")+`ws/compile?id=${id}`;
          connect(wsUrl,{
            onOpen:()=>{},
            onMessage:(m)=>{},
            onClose:()=>{},
            onError:()=>{}
          })
        }
    
    
    
  const lineCount = code.split("\n").length;
  
  return (
    <>
      <div className="grid grid-cols-2 h-screen   ">
        
        
        <div
          className={`text-3xl ${
            theme === "light" ? "bg-gray-100" : "bg-gray-800"
            } sticky top-0`}
            >
          {/* NAV BAR */}
          <nav
            className={`relative flex items-center justify-between p-2 border-b
              ${
                theme === "light"
                ? "bg-white text-black border-gray-300"
                : "bg-cyan-900 text-white border-gray-700"
                }`}
                >
            {/* LANGUAGE SELECT */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className={`p-1 text-sm rounded-lg border outline-none ${
                theme === "light"
                ? "bg-white text-black border-gray-400"
                : "bg-amber-100 text-black border-white"
                }`}
                >
              <option value="">Java</option>
              {Languages.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <button
              className={`px-4 py-1 rounded-lg cursor-pointer font-semibold text-sm transition-all
                ${
                  theme === "light"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-yellow-400 text-black hover:bg-yellow-500"
                  }`}
                  onClick={compile}
                  >
              Run
            </button>
          </nav>

          {/* EDITOR AREA */}
          <div className="flex h-[calc(100%-60px)]">
            
            {/* LINE NUMBERS */}
            <div
              className={`w-12 text-right pr-2 text-lg py-2 border-r select-none 
                ${
                  theme === "light"
                  ? "bg-gray-200 border-gray-300 text-gray-600"
                  : "bg-gray-900 border-gray-700 text-gray-400"
                  }`}
                  >
              {Array.from({ length: lineCount }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            <textarea
              placeholder="Write your code here...."
              className={`flex-1 p-2 text-lg font-mono outline-none overflow-auto resize-none
                ${
                  theme === "light"
                  ? "bg-white text-black"
                  : "bg-gray-900 text-white"
                  }`}
                  spellCheck="false"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  ></textarea>
          </div>
        </div>

        <div className={`${theme==="light"?"bg-green-300":"bg-gray-900"} border-l-2`}>
          <nav className={`relative flex items-center justify-between p-2 border-b
              ${
                theme === "light"
                ? "bg-white text-black border-gray-300"
                : "bg-cyan-900 text-white border-gray-700"
                }`}>
            <div className="text-xl">  
              Output  
            </div>
            <div>
              {/* <button className={`${theme === "light"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-yellow-400 text-black hover:bg-yellow-500"}  rounded-lg px-3  cursor-pointer`}>
                clear
              </button> */}
            </div>
          </nav>
          <div className="h-full ">
            <TerminalArea></TerminalArea>
          </div>
        </div>
        
      </div>
    </>
  );
}