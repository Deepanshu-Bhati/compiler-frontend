"use client";

import { useRef, useEffect } from "react";
import { useHook } from "./hooks";
import "xterm/css/xterm.css";

export default function TerminalArea() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const terminalRef = useRef<any>(null);

  const { setOnMessage, setOnClose, send } = useHook();

  useEffect(() => {
    let disposed = false;

    const initTerminal = async () => {
      if (!containerRef.current) return;

      // ✅ dynamic imports (prevents `self is not defined`)
      const { Terminal } = await import("xterm");
      const { FitAddon } = await import("xterm-addon-fit");

      if (disposed) return;

      const fitAddon = new FitAddon();

      const terminal = new Terminal({
        cursorBlink: true,
        fontSize: 14,
        scrollback: 2000,
        theme: {
          background: "#000000",
          foreground: "#00ff00",
        },
      });

      terminalRef.current = terminal;

      terminal.loadAddon(fitAddon);
      terminal.open(containerRef.current);
      fitAddon.fit();
      terminal.focus();

      terminal.writeln("Connected to backend...");
      terminal.write("> ");

      selfHandleOutput(terminal);
      selfHandleInput(terminal);
    };

    /** ---------- SELF: OUTPUT HANDLER ---------- */
    const selfHandleOutput = (terminal: any) => {
      const queue: string[] = [];
      let running = false;

      const flush = async () => {
        if (running) return;
        running = true;

        while (queue.length > 0) {
          terminal.write(queue.shift()!);
          await new Promise(r => setTimeout(r, 1));
        }

        running = false;
      };

      setOnMessage((data: string) => {
        queue.push(data);
        flush();
      });

      setOnClose(() => {
        terminal.write("\r\n[Program executed successfully]\r\n> ");
      });
    };

    /** ---------- SELF: INPUT HANDLER ---------- */
    const selfHandleInput = (terminal: any) => {
      let buffer = "";

      terminal.onData((data: string) => {
        // ENTER
        if (data === "\r") {
          selfSend(buffer.trim(), terminal);
          buffer = "";
          terminal.write("\r\n> ");
          return;
        }

        // BACKSPACE
        if (data === "\u007F") {
          if (buffer.length) {
            buffer = buffer.slice(0, -1);
            terminal.write("\b \b");
          }
          return;
        }

        buffer += data;
        terminal.write(data);
      });
    };

    /** ---------- SELF: SEND LOGIC ---------- */
    const selfSend = (input: string, terminal: any) => {
      if (!input) return;

      if (input === "clear") {
        terminal.clear();
        return;
      }

      let payload;

      if (/^".*"$/.test(input)) {
        payload = { type: "string", value: input.slice(1, -1) };
      } else if (/^-?\d+$/.test(input)) {
        payload = { type: "number", value: Number(input) };
      } else {
        payload = { type: "string", value: input };
      }

      send(JSON.stringify(payload));
    };

    initTerminal();

    return () => {
      disposed = true;
      terminalRef.current?.dispose();
      terminalRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full w-full bg-black rounded text-gray-100"
    />
  );
}
