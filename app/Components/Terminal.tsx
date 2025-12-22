"use client";

import { useRef, useEffect } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { useHook } from "./hooks";
import "xterm/css/xterm.css";

export default function TerminalArea() {
  const termRef = useRef<HTMLDivElement | null>(null);
  const terminalRef = useRef<Terminal | null>(null);
  const { setOnMessage, setOnClose,send } = useHook();

  useEffect(() => {
    if (!termRef.current) return;

    const fitAddon = new FitAddon();
    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      theme: {
        background: "#000000",
        foreground: "#00ff00",
      },
      scrollback: 2000,
    });

    terminalRef.current = term;
    term.loadAddon(fitAddon);
    term.open(termRef.current);
    fitAddon.fit();
    term.focus();

    term.writeln("Connected to backend...");
    term.write("> ");

    const outputQueue: string[] = [];
    let processing = false;

    const flushOutput = () => {
      if (processing) return;
      processing = true;

      (async function loop() {
        while (outputQueue.length > 0) {
          const ch = outputQueue.shift();
          if (ch) {
            term.write(ch);
            await new Promise(r => setTimeout(r, 1)); // prevents UI lag
          }
        }
        processing = false;
      })();
    };

    // backend message handler
    setOnMessage((data: string) => {
      outputQueue.push(data); // data is single char
      flushOutput();
    });

    
    let buffer = "";

    term.onData(data => {
      if (data === "\r") {
        handleInput(buffer.trim());
        buffer = "";
        term.write("\r\n> ");
        return;
      }

      if (data === "\u007F") { 
        if (buffer.length > 0) {
          buffer = buffer.slice(0, -1);
          term.write("\b \b");
        }
        return;
      }

      buffer += data;
      term.write(data);
    });

    setOnClose(() => {
        term.write("\r\n[Program is successfully executed]\r\n");
        term.write("> ");
      });

    const handleInput = (input: string) => {
      if (!input.length) return;

      if (input === "clear") {
        term.clear();
        return;
      }

      let payload;

      if (/^".*"$/.test(input)) {
        payload = { type: "string", value: input.slice(1, -1) };
      } 
      else if (/^-?\d+$/.test(input)) {
        payload = { type: "number", value: Number(input) };
      }
      else {
        payload = { type: "string", value: input };
      }

      send(JSON.stringify(payload));
    };

    return () => {

      term.dispose();
      terminalRef.current = null;
    };

  }, []);

  return (
    <div ref={termRef} className="h-full w-full bg-black rounded text-gray-100" />
  );
}
