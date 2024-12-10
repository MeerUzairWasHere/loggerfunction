"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
function greet(name) {
    (0, _1.log)("Hello,", name);
}
function add(a, b) {
    (0, _1.log)("Adding numbers:", a, b);
    return a + b;
}
greet("World");
add(5, 3);
(0, _1.log)("This is a standalone log");
