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
exports.RiotApi = void 0;
const summoner_1 = require("./Models/summoner");
const champion_1 = require("./Models/champion");
const rank_1 = require("./Models/rank");
const championMastery_1 = require("./Models/championMastery");
class RiotApi {
    constructor(riotConfig) {
        this.riotcConfig = riotConfig;
    }
    /**
     *
     * @param summonerId
     * @param region
     * @param queueType
     * @returns
     */
    getRankById(summonerId, region, queueType) {
        return __awaiter(this, void 0, void 0, function* () {
            const rank = yield rank_1.default.getRank(summonerId, region, this.riotcConfig, queueType);
            return rank;
        });
    }
    /**
     *
     * @param summonerId
     * @param region
     * @returns
     */
    getChampionMasteryById(summonerId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const cahmpionMastery = yield championMastery_1.default.getCahmpionMastery(summonerId, region, this.riotcConfig);
            return cahmpionMastery;
        });
    }
    /**
     *
     * @param key
     * @returns
     */
    getChampionByKey(key) {
        return __awaiter(this, void 0, void 0, function* () {
            return champion_1.default.getChampion("key", key);
        });
    }
    /**
     *
     * @param name
     * @returns
     */
    getChampionByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return champion_1.default.getChampion("name", name);
        });
    }
    /**
     *
     * @param summonerName
     * @param region
     * @returns
     */
    getSummonerByName(summonerName, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const summoner = yield summoner_1.default.getSummoner(summonerName, region, "/by-name", this.riotcConfig);
            return summoner;
        });
    }
    /**
     *
     * @param summonerId
     * @param region
     * @returns
     */
    getSummonerById(summonerId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const summoner = yield summoner_1.default.getSummoner(summonerId, region, "", this.riotcConfig);
            return summoner;
        });
    }
}
exports.RiotApi = RiotApi;
//# sourceMappingURL=RiotApi.js.map