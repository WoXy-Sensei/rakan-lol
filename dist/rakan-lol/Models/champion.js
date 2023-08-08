"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dragon_1 = require("./dragon");
class Champion {
    constructor(id, key, name, title, blurb, tags, partype) {
        this.id = id;
        this.key = key;
        this.name = name;
        this.title = title;
        this.blurb = blurb;
        this.tags = tags;
        this.partype = partype;
    }
    getIcon() {
        return __awaiter(this, void 0, void 0, function* () {
            const championIcon = yield dragon_1.default.findChampionIconById(this.id);
            return championIcon;
        });
    }
    static getChampion(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const champion = yield dragon_1.default.findChampion(key, value);
            return new Champion(champion.id, champion.key, champion.name, champion.title, champion.blurb, champion.tags, champion.partype);
        });
    }
}
exports.default = Champion;
//# sourceMappingURL=champion.js.map