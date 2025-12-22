(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Project1/compiler/app/Provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeContext",
    ()=>ThemeContext,
    "WebSocketContext",
    ()=>WebSocketContext,
    "default",
    ()=>Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: "light",
    setTheme: ()=>{}
});
const WebSocketContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function Provider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageHandlerref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const connect = (url, handlers)=>{
        if (socketRef.current) {
            socketRef.current.close();
        }
        const socket = new WebSocket(url);
        if (handlers?.onOpen) socket.onopen = handlers.onOpen;
        if (handlers?.onMessage) socket.onmessage = handlers.onMessage;
        if (handlers?.onClose) socket.onclose = handlers.onClose;
        if (handlers?.onError) socket.onerror = handlers.onError;
        socket.onmessage = (event)=>{
            console.log("message received");
            messageHandlerref.current?.(event.data);
        };
        socketRef.current = socket;
    };
    const setOnMessage = (handler)=>{
        messageHandlerref.current = handler;
    };
    const send = (data)=>{
        if (socketRef.current?.readyState == WebSocket.OPEN) {
            socketRef.current.send(data);
        }
    };
    const disconnect = ()=>{
        socketRef.current?.close();
        socketRef.current = null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WebSocketContext.Provider, {
        value: {
            socketRef,
            send,
            connect,
            setOnMessage,
            disconnect
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
            value: {
                theme,
                setTheme
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/Project1/compiler/app/Provider.tsx",
            lineNumber: 87,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/Project1/compiler/app/Provider.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(Provider, "TJ9JjwqPymtvhdw8VDGtaVA6idE=");
_c = Provider;
var _c;
__turbopack_context__.k.register(_c, "Provider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project1/compiler/app/Components/hooks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHook",
    ()=>useHook,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/app/Provider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
function useTheme() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeContext"]);
}
_s(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useHook() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebSocketContext"]);
    if (!ctx) {
        throw new Error("websocket is not exist");
    }
    return ctx;
}
_s1(useHook, "/dMy7t63NXD4eYACoT93CePwGrg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project1/compiler/app/Components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/app/Components/hooks.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Navbar() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const toggleTheme = ()=>{
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        ${theme === "light" ? "text-black bg-amber-100" : "text-amber-100 bg-gray-900"}
        h-20 sticky top-0 z-50 w-full
        flex items-center px-6 shadow-md border-b border-gray-400
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    className: "text-5xl font-extrabold tracking-wide select-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-400",
                            children: "DE"
                        }, void 0, false, {
                            fileName: "[project]/Project1/compiler/app/Components/Navbar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        "CODE"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Project1/compiler/app/Components/Navbar.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: toggleTheme,
                    className: "p-3 rounded-full transition-all hover:scale-110 active:scale-95",
                    "aria-label": "Toggle theme",
                    children: theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMoon"], {
                        className: "text-3xl text-gray-700"
                    }, void 0, false, {
                        fileName: "[project]/Project1/compiler/app/Components/Navbar.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSun"], {
                        className: "text-3xl text-yellow-300"
                    }, void 0, false, {
                        fileName: "[project]/Project1/compiler/app/Components/Navbar.tsx",
                        lineNumber: 38,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Project1/compiler/app/Components/Navbar.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Project1/compiler/app/Components/Navbar.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Project1/compiler/app/Components/Navbar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Navbar, "5ABGV54qnXKp6rHn7MS/8MjwRhQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project1/compiler/app/Components/asyncQueue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncQueue",
    ()=>AsyncQueue
]);
class AsyncQueue {
    constructor(){
        this.queue = [];
        this.processing = false;
    }
    enqueue(task) {
        this.queue.push(task);
        this.#process();
    }
    async #process() {
        if (this.processing) return;
        this.processing = true;
        while(this.queue.length){
            const task = this.queue.shift();
            try {
                await task(); // wait before next task
            } catch (err) {
                console.error("Queue task failed:", err);
            }
        }
        this.processing = false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project1/compiler/app/Components/Terminal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clean",
    ()=>Clean,
    "default",
    ()=>TerminalArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$xterm$2f$lib$2f$xterm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/xterm/lib/xterm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$xterm$2d$addon$2d$fit$2f$lib$2f$xterm$2d$addon$2d$fit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/xterm-addon-fit/lib/xterm-addon-fit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/app/Components/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$asyncQueue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/app/Components/asyncQueue.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Clean() {}
_c = Clean;
function TerminalArea() {
    _s();
    const termref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const terminal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const queueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$asyncQueue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsyncQueue"]());
    const { setOnMessage, send } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHook"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TerminalArea.useEffect": ()=>{
            if (!termref.current) return;
            const term = new __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$xterm$2f$lib$2f$xterm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Terminal"]({
                cursorBlink: true,
                fontSize: 14,
                theme: {
                    background: "#000000",
                    foreground: "#00ff00"
                }
            });
            const fitAddon = new __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$xterm$2d$addon$2d$fit$2f$lib$2f$xterm$2d$addon$2d$fit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FitAddon"]();
            term.loadAddon(fitAddon);
            term.open(termref.current);
            fitAddon.fit();
            term.focus();
            term.writeln("connected  to backend ");
            setOnMessage({
                "TerminalArea.useEffect": (data)=>{
                    queueRef.current.enqueue({
                        "TerminalArea.useEffect": async ()=>{
                            await new Promise({
                                "TerminalArea.useEffect": (res)=>setTimeout(res, 5)
                            }["TerminalArea.useEffect"]);
                            term.write(data + "\r\n");
                        }
                    }["TerminalArea.useEffect"]);
                }
            }["TerminalArea.useEffect"]);
            let buffer = "";
            term.onData({
                "TerminalArea.useEffect": (data)=>{
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
                            payload = {
                                type: "string",
                                value: trimmed.slice(1, -1)
                            };
                        } else if (/^-?\d+$/.test(trimmed)) {
                            payload = {
                                type: "number",
                                value: Number(trimmed)
                            };
                        } else {
                            payload = {
                                type: "string",
                                value: trimmed
                            };
                        }
                        send(JSON.stringify(payload));
                        term.write(data === '\r' ? "\r\n" : " ");
                        buffer = "";
                        return;
                    }
                    buffer += data;
                    term.write(data);
                }
            }["TerminalArea.useEffect"]);
            terminal.current = term;
            return ({
                "TerminalArea.useEffect": ()=>{
                    buffer = "";
                    if (terminal.current) {
                        terminal.current.reset();
                        terminal.current.dispose();
                        terminal.current = null;
                    }
                }
            })["TerminalArea.useEffect"];
        }
    }["TerminalArea.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: termref,
            className: "h-full w-full bg-black text-amber-50"
        }, void 0, false, {
            fileName: "[project]/Project1/compiler/app/Components/Terminal.tsx",
            lineNumber: 100,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_s(TerminalArea, "a0l6BCNyTdkIqVr8nrj2ed9ZdB8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHook"]
    ];
});
_c1 = TerminalArea;
var _c, _c1;
__turbopack_context__.k.register(_c, "Clean");
__turbopack_context__.k.register(_c1, "TerminalArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Project1/compiler/app/Components/Code.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Code
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Project1/compiler/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/app/Components/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$Terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Project1/compiler/app/Components/Terminal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Code() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("java");
    const [code, setCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [output, setOutput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const { connect, socketRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHook"])();
    // const {socketRef}=useHook();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const Languages = [
        "Cpp",
        "Python",
        "C#",
        "Rust",
        "Go",
        "Javascript",
        "TypeScript"
    ];
    const compile = async ()=>{
        const base = ("TURBOPACK compile-time value", "http://13.60.52.48:8080/");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let res = await __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${base}compile`, {
            language: lang,
            code: code
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const id = res.data;
        const wsUrl = base.replace("http", "ws") + `ws/compile?id=${id}`;
        connect(wsUrl, {
            onOpen: ()=>console.log("socket connection is live"),
            onMessage: (m)=>console.log(m.data),
            onClose: ()=>console.log(""),
            onError: ()=>console.log("")
        });
    };
    const lineCount = code.split("\n").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 h-screen   ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-3xl ${theme === "light" ? "bg-gray-100" : "bg-gray-800"} sticky top-0`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: `relative flex items-center justify-between p-2 border-b
              ${theme === "light" ? "bg-white text-black border-gray-300" : "bg-cyan-900 text-white border-gray-700"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: lang,
                                    onChange: (e)=>setLang(e.target.value),
                                    className: `p-1 text-sm rounded-lg border outline-none ${theme === "light" ? "bg-white text-black border-gray-400" : "bg-amber-100 text-black border-white"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Java"
                                        }, void 0, false, {
                                            fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        Languages.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: item,
                                                children: item
                                            }, item, false, {
                                                fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `px-4 py-1 rounded-lg cursor-pointer font-semibold text-sm transition-all
                ${theme === "light" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-yellow-400 text-black hover:bg-yellow-500"}`,
                                    onClick: compile,
                                    children: "Run"
                                }, void 0, false, {
                                    fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-[calc(100%-60px)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-12 text-right pr-2 text-lg py-2 border-r select-none 
                ${theme === "light" ? "bg-gray-200 border-gray-300 text-gray-600" : "bg-gray-900 border-gray-700 text-gray-400"}`,
                                    children: Array.from({
                                        length: lineCount
                                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: i + 1
                                        }, i, false, {
                                            fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Write your code here....",
                                    className: `flex-1 p-2 text-lg font-mono outline-none overflow-auto resize-none
                ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`,
                                    spellCheck: "false",
                                    value: code,
                                    onChange: (e)=>setCode(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${theme === "light" ? "bg-green-300" : "bg-gray-900"} border-l-2`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: `relative flex items-center justify-between p-2 border-b
              ${theme === "light" ? "bg-white text-black border-gray-300" : "bg-cyan-900 text-white border-gray-700"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xl",
                                    children: "Output"
                                }, void 0, false, {
                                    fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                    fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$Terminal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Project1/compiler/app/Components/Code.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Code, "6Nbdo63ydXD9xmgQUV2Qo6OptTc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Project1$2f$compiler$2f$app$2f$Components$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHook"]
    ];
});
_c = Code;
var _c;
__turbopack_context__.k.register(_c, "Code");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Project1_compiler_app_78a3829c._.js.map