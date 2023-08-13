"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiotApiConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
class RiotApiConfig {
    static setApiKey(api_key) {
        process.env['api_key'] = api_key;
    }
    static getApiKey() {
        return process.env['api_key'];
    }
}
exports.RiotApiConfig = RiotApiConfig;
//# sourceMappingURL=RiotApiConfig.js.map