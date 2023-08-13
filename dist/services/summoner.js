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
const Models_1 = require("../Models");
const RiotApiConfig_1 = require("../RiotApiConfig");
class SummonerService {
    static getSummoner(value, region, how = "") {
        return __awaiter(this, void 0, void 0, function* () {
            const api_key = RiotApiConfig_1.RiotApiConfig.getApiKey();
            const url = `lol/summoner/v4/summoners${how}/${value}`;
            try {
                const response = yield axios_1.default.get(`https://${region}.api.riotgames.com/${url}?api_key=${api_key}`);
                const data = response.data;
                const summoner = new Models_1.Summoner(data.accountId, data.profileIconId, data.name, data.id, data.puuid, data.summonerLevel, region);
                return summoner;
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    }
    static getSummonerByName(summonerName, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const summoner = yield this.getSummoner(summonerName, region, "/by-name");
            return summoner;
        });
    }
    static getSummonerById(summonerId, region) {
        return __awaiter(this, void 0, void 0, function* () {
            const summoner = yield this.getSummoner(summonerId, region);
            return summoner;
        });
    }
}
exports.default = SummonerService;
//# sourceMappingURL=summoner.js.map