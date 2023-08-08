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
const axios_1 = require("axios");
const rank_1 = require("./rank");
const championMastery_1 = require("./championMastery");
class Summoner {
    constructor(account_id, icon_id, summoner_name, summonerId, puuid, summoner_level, region, config) {
        this.iconid = NaN;
        this.accountid = account_id;
        this.iconid = icon_id;
        this.summonerName = summoner_name;
        this.summonerId = summonerId;
        this.puuid = puuid;
        this.summonerlevel = summoner_level;
        this.region = region;
        this.config = config;
    }
    getIcon() {
        return __awaiter(this, void 0, void 0, function* () {
            return dragon_1.default.findIconById(this.iconid);
        });
    }
    getRank(queueType) {
        return __awaiter(this, void 0, void 0, function* () {
            const rank = yield rank_1.default.getRank(this.summonerId, this.region, this.config, queueType);
            return rank;
        });
    }
    getChampionMastery() {
        return __awaiter(this, void 0, void 0, function* () {
            const cahmpionMastery = yield championMastery_1.default.getCahmpionMastery(this.summonerId, this.region, this.config);
            return cahmpionMastery;
        });
    }
    static getSummoner(summonerName, region, how, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `lol/summoner/v4/summoners${how}/${summonerName}`;
            try {
                const response = yield axios_1.default.get(`https://${region}.api.riotgames.com/${url}?api_key=${config.Api_key}`);
                const data = response.data;
                const summoner = new Summoner(data.accountId, data.profileIconId, data.name, data.id, data.puuid, data.summonerLevel, region, config);
                return summoner;
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    }
}
exports.default = Summoner;
//# sourceMappingURL=summoner.js.map