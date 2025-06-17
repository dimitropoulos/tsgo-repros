"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunction = void 0;
const my_package_b_1 = require("@tsgo-repros/my-package-b");
const myFunction = () => {
    console.log("Hello from my-package!");
};
exports.myFunction = myFunction;
(0, my_package_b_1.myFunction)();
