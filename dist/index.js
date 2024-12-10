"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
function log(...args) {
    const stack = new Error().stack;
    const callerInfo = stack === null || stack === void 0 ? void 0 : stack.split("\n")[2].trim();
    const match = callerInfo === null || callerInfo === void 0 ? void 0 : callerInfo.match(/\((.*\/)?([^\/]+):(\d+):\d+\)/);
    if (match) {
        const [, , fileName, line] = match;
        console.log(`[${fileName}:${line}]`, ...args);
    }
    else {
        console.log(...args);
    }
}
