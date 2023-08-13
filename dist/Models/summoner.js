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
exports.Summoner = void 0;
const league_1 = require("../services/league");
const championMastery_1 = require("../services/championMastery");
const dragon_1 = require("../services/dragon");
class Summoner {
    constructor(account_id, icon_id, summoner_name, summonerId, puuid, summoner_level, region) {
        this.iconid = NaN;
        this.accountid = account_id;
        this.iconid = icon_id;
        this.summonerName = summoner_name;
        this.summonerId = summonerId;
        this.puuid = puuid;
        this.summonerlevel = summoner_level;
        this.region = region;
    }
    getIcon() {
        return __awaiter(this, void 0, void 0, function* () {
            return dragon_1.default.findIconById(this.iconid);
        });
    }
    getLeague(queueType) {
        return __awaiter(this, void 0, void 0, function* () {
            const league = yield league_1.default.getLeague(this.summonerId, this.region, queueType);
            return league;
        });
    }
    getChampionMastery() {
        return __awaiter(this, void 0, void 0, function* () {
            const cahmpionMastery = yield championMastery_1.default.getCahmpionMastery(this.summonerId, this.region);
            return cahmpionMastery;
        });
    }
}
exports.Summoner = Summoner;
//# sourceMappingURL=summoner.js.map