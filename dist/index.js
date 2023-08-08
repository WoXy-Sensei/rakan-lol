"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotApiConfig = exports.RiotApi = void 0;
var RiotApi_1 = require("./RiotApi");
Object.defineProperty(exports, "RiotApi", { enumerable: true, get: function () { return RiotApi_1.RiotApi; } });
var RiotApiConfig_1 = require("./RiotApiConfig");
Object.defineProperty(exports, "RiotApiConfig", { enumerable: true, get: function () { return RiotApiConfig_1.RiotApiConfig; } });
__exportStar(require("./Constants"), exports);
__exportStar(require("./Models"), exports);
//# sourceMappingURL=index.js.map