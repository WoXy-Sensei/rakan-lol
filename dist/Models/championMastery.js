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
exports.CahmpionMastery = void 0;
const axios_1 = require("axios");
const champion_1 = require("./champion");
class CahmpionMastery {
    constructor(championLevel, championPoints, lastPlayTime, championPointsSinceLastLevel, championPointsUntilNextLevel, chestGranted, tokensEarned, championId) {
        this.championLevel = championLevel;
        this.championPoints = championPoints;
        this.lastPlayTime = lastPlayTime;
        this.championPointsSinceLastLevel = championPointsSinceLastLevel;
        this.championPointsUntilNextLevel = championPointsUntilNextLevel;
        this.chestGranted = chestGranted;
        this.tokensEarned = tokensEarned;
        this.championId = championId;
    }
    getCahmpion() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield champion_1.Champion.getChampion("key", this.championId);
        });
    }
    static getCahmpionMastery(summonerId, region, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`;
                const response = yield axios_1.default.get(`https://${region}.api.riotgames.com/${url}?api_key=${config.Api_key}`);
                const data = response.data;
                if (data.length === 0)
                    return;
                const cahmpionMasterys = yield data.map((championMastery) => new CahmpionMastery(championMastery.championLevel, championMastery.championPoints, championMastery.lastPlayTime, championMastery.championPointsSinceLastLevel, championMastery.championPointsUntilNextLevel, championMastery.chestGranted, championMastery.tokensEarned, championMastery.championId));
                return cahmpionMasterys;
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    }
}
exports.CahmpionMastery = CahmpionMastery;
//# sourceMappingURL=championMastery.js.map