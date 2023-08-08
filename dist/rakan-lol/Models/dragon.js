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
const axios_1 = require("axios");
class Dragon {
    static findChampion(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getChampion(key, value);
        });
    }
    static findIconById(iconId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getDragonPath(`img/profileicon/${iconId}.png`);
        });
    }
    static findChampionIconById(champion) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getDragonPath(`img/champion/${champion}.png`);
        });
    }
    static findTierFrameByName(tier) {
        return __awaiter(this, void 0, void 0, function* () {
            let tiers = {
                IRON: "01_iron",
                BRONZ: "02_bronz",
                SILVER: "03_silver",
                GOLD: "04_gold",
                PLATINUM: "05_platinum",
                EMERALD: "emerald",
                DIAMOND: "06_diamond",
                MASTER: "07_master",
                GRANDMASTER: "08_grandmaster",
                CHALLENGER: "09_challenger",
            };
            return yield this.getCommunityDragonPath(`loadouts/regalia/crests/ranked/${tiers[tier]}/${tiers[tier]}_base.png`);
        });
    }
    static getLatestVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get("https://ddragon.leagueoflegends.com/api/versions.json");
                return response.data[0];
            }
            catch (error) {
                console.log("Error:", error);
            }
        });
    }
    static getChampion(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield this.getDragonPath("data/en_US/champion.json");
            const championsData = yield axios_1.default.get(url);
            let champions = championsData["data"].data;
            for (const championName in champions) {
                if (champions[championName][key] == value) {
                    return champions[championName];
                }
            }
            return undefined;
        });
    }
    static getDragonPath(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const version = yield Dragon.getLatestVersion();
            const fullPath = `${Dragon.dragon}/${version}/${path}`;
            return fullPath;
        });
    }
    static getCommunityDragonPath(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullPath = `${Dragon.communitydragon}/${path}`;
            return fullPath;
        });
    }
}
Dragon.dragon = "http://ddragon.leagueoflegends.com/cdn";
Dragon.communitydragon = "https://raw.communitydragon.org/latest/game/assets";
exports.default = Dragon;
//# sourceMappingURL=dragon.js.map