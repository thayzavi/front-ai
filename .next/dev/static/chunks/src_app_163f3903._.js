(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/services/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "https://chat-ai-bot-a61v.onrender.com"
});
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/styles/Siderbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "item": "Siderbar-module__asTwPW__item",
  "logo": "Siderbar-module__asTwPW__logo",
  "logout": "Siderbar-module__asTwPW__logout",
  "sidebar": "Siderbar-module__asTwPW__sidebar",
});
}),
"[project]/src/app/components/ChatSiderbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Siderbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/styles/Siderbar.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function ChatSidebar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "8d35e4bf5b7e5817d652a0c5bbcee8e3c2e4fc76db490bbc79d833cd23e075b2") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8d35e4bf5b7e5817d652a0c5bbcee8e3c2e4fc76db490bbc79d833cd23e075b2";
    }
    const { setConversationId } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [conversations, setConversations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t2;
    if ($[2] !== router) {
        t2 = function logout() {
            localStorage.removeItem("token");
            router.push("/login");
        };
        $[2] = router;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const logout = t2;
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ChatSidebar[useEffect()]": ()=>{
                const load = async function load() {
                    ;
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/chat/conversations");
                        setConversations(res.data);
                    } catch (t5) {
                        const error = t5;
                        console.error("Erro ao carregar conversas:", error);
                    }
                };
                load();
            }
        })["ChatSidebar[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Siderbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
            children: [
                "Code",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Tutor AI"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/ChatSiderbar.js",
                    lineNumber: 66,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ChatSiderbar.js",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== conversations || $[8] !== setConversationId) {
        let t7;
        if ($[10] !== setConversationId) {
            t7 = ({
                "ChatSidebar[conversations.map()]": (conv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Siderbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                        onClick: {
                            "ChatSidebar[conversations.map() > <div>.onClick]": ()=>setConversationId(conv.id)
                        }["ChatSidebar[conversations.map() > <div>.onClick]"],
                        children: conv.title || "Sem t\xEDtulo"
                    }, conv.id, false, {
                        fileName: "[project]/src/app/components/ChatSiderbar.js",
                        lineNumber: 76,
                        columnNumber: 53
                    }, this)
            })["ChatSidebar[conversations.map()]"];
            $[10] = setConversationId;
            $[11] = t7;
        } else {
            t7 = $[11];
        }
        t6 = conversations.map(t7);
        $[7] = conversations;
        $[8] = setConversationId;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[12] !== logout) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Siderbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logout,
            onClick: logout,
            children: "Sair"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChatSiderbar.js",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[12] = logout;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t6 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Siderbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
            children: [
                t5,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ChatSiderbar.js",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[14] = t6;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
}
_s(ChatSidebar, "fpytXcsJlaCuLm0OyDoRWKjs2eo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ChatSidebar;
var _c;
__turbopack_context__.k.register(_c, "ChatSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/styles/Message.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "Message-module__D4hPRW__button",
  "container": "Message-module__D4hPRW__container",
  "input": "Message-module__D4hPRW__input",
});
}),
"[project]/src/app/components/MessageInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Message$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/styles/Message.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function MessageInput(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "36ec99cc401868aff656d6eb55e066e155872bbd67dd54cfbd82312993c8865d") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "36ec99cc401868aff656d6eb55e066e155872bbd67dd54cfbd82312993c8865d";
    }
    const { conversationId, setMessages } = t0;
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[1] !== conversationId || $[2] !== message || $[3] !== setMessages) {
        t1 = async function send() {
            if (!message.trim()) {
                return;
            }
            const userMessage = {
                content: message,
                sender: "USER"
            };
            setMessages({
                "MessageInput[send > setMessages()]": (prev)=>[
                        ...prev,
                        userMessage
                    ]
            }["MessageInput[send > setMessages()]"]);
            setMessage("");
            ;
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/chat/message", {
                    message,
                    conversationId
                });
                const botMessage = {
                    content: res.data.message,
                    sender: "BOT"
                };
                setMessages({
                    "MessageInput[send > setMessages()]": (prev_0)=>[
                            ...prev_0,
                            botMessage
                        ]
                }["MessageInput[send > setMessages()]"]);
            } catch (t2) {
                const error = t2;
                console.error(error);
            }
        };
        $[1] = conversationId;
        $[2] = message;
        $[3] = setMessages;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const send = t1;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "MessageInput[<input>.onChange]": (e)=>setMessage(e.target.value)
        })["MessageInput[<input>.onChange]"];
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== message) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Message$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
            value: message,
            onChange: t2,
            placeholder: "Digite sua mensagem..."
        }, void 0, false, {
            fileName: "[project]/src/app/components/MessageInput.js",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = message;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== send) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Message$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
            onClick: send,
            children: "Enviar"
        }, void 0, false, {
            fileName: "[project]/src/app/components/MessageInput.js",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[8] = send;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Message$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/MessageInput.js",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_s(MessageInput, "EiOGSxO4GWQlH0sM782nQ9JwuAs=");
_c = MessageInput;
var _c;
__turbopack_context__.k.register(_c, "MessageInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/styles/Chat.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bot": "Chat-module__d14gvG__bot",
  "chatWindow": "Chat-module__d14gvG__chatWindow",
  "container": "Chat-module__d14gvG__container",
  "initialMessage": "Chat-module__d14gvG__initialMessage",
  "messages": "Chat-module__d14gvG__messages",
  "user": "Chat-module__d14gvG__user",
});
}),
"[project]/src/app/components/ChatWindow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MessageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/MessageInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/styles/Chat.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function ChatWindow(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "7372e6003e7ffe12aeff3e987e0008f389a83c383ac6933fd1fa4a23137341d4") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7372e6003e7ffe12aeff3e987e0008f389a83c383ac6933fd1fa4a23137341d4";
    }
    const { conversationId } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    let t3;
    if ($[2] !== conversationId) {
        t2 = ({
            "ChatWindow[useEffect()]": ()=>{
                if (!conversationId) {
                    return;
                }
                const load = async function load() {
                    ;
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/chat/conversations/${conversationId}/messages`);
                        setMessages(res.data);
                    } catch (t4) {
                        const error = t4;
                        console.error("Erro ao carregar mensagens:", error);
                    }
                };
                load();
            }
        })["ChatWindow[useEffect()]"];
        t3 = [
            conversationId
        ];
        $[2] = conversationId;
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] !== messages) {
        t4 = messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].initialMessage,
            children: "Olá! 👋 Como posso te ajudar hoje?"
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChatWindow.js",
            lineNumber: 57,
            columnNumber: 34
        }, this) : messages.map(_ChatWindowMessagesMap);
        $[5] = messages;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messages,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChatWindow.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== conversationId) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$MessageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            conversationId: conversationId,
            setMessages: setMessages
        }, void 0, false, {
            fileName: "[project]/src/app/components/ChatWindow.js",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[9] = conversationId;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatWindow,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/ChatWindow.js",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
}
_s(ChatWindow, "w78WazjJZh1cw+gLsIG/7cZWHF4=");
_c = ChatWindow;
function _ChatWindowMessagesMap(msg, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: msg.sender === "USER" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].user : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bot,
        children: msg.content
    }, index, false, {
        fileName: "[project]/src/app/components/ChatWindow.js",
        lineNumber: 91,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ChatWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/chat/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChatSiderbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ChatSiderbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChatWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ChatWindow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/styles/Chat.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ChatPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "be355056c4ea743223a6adbf72b65bfdfe5d410ef53d7a38abb0d61ba4b89409") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "be355056c4ea743223a6adbf72b65bfdfe5d410ef53d7a38abb0d61ba4b89409";
    }
    const [conversationId, setConversationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChatSiderbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            setConversationId: setConversationId
        }, void 0, false, {
            fileName: "[project]/src/app/chat/page.js",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== conversationId) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$styles$2f$Chat$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChatWindow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    conversationId: conversationId
                }, void 0, false, {
                    fileName: "[project]/src/app/chat/page.js",
                    lineNumber: 26,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/chat/page.js",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[2] = conversationId;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_s(ChatPage, "KGrfc82/2eTq3YVeXN2vL54rFc4=");
_c = ChatPage;
var _c;
__turbopack_context__.k.register(_c, "ChatPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_163f3903._.js.map