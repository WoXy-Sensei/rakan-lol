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
const league_1 = require("./services/league");
const championMastery_1 = require("./services/championMastery");
const dragon_1 = require("./services/dragon");
const summoner_1 = require("./services/summoner");
class RiotApi {
    /**
     *
     * @param summonerId
     * @param region
     * @param queueType
     * @returns
     */
    getLeagueBySummonerId(summonerId, region, queueType) {
        return __awaiter(this, void 0, void 0, function* () {
            const league = yield league_1.default.getLeague(summonerId, region, queueType);
            return league;
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
            const cahmpionMastery = yield championMastery_1.default.getCahmpionMastery(summonerId, region);
            return cahmpionMastery;
        });
    }
    /**
     *
     * @param id
     * @returns
     */
    getChampionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dragon_1.default.findChampionById(id);
        });
    }
    /**
     *
     * @param name
     * @returns
     */
    getChampionByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return dragon_1.default.findChampionByName(name);
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
            const summoner = yield summoner_1.default.getSummonerByName(summonerName, region);
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
            const summoner = yield summoner_1.default.getSummonerById(summonerId, region);
            return summoner;
        });
    }
}
exports.RiotApi = RiotApi;
//# sourceMappingURL=RiotApi.js.map