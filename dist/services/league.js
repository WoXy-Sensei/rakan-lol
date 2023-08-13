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
const league_1 = require("../Models/league");
const RiotApiConfig_1 = require("../RiotApiConfig");
class LeagueService {
    static getLeague(summonerId, region, queueType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const api_key = RiotApiConfig_1.RiotApiConfig.getApiKey();
                const url = `lol/league/v4/entries/by-summoner/${summonerId}`;
                const response = yield axios_1.default.get(`https://${region}.api.riotgames.com/${url}?api_key=${api_key}`);
                const data = response.data;
                if (data.length === 0)
                    return;
                const leaguedata = data.find((leagueobject) => leagueobject.queueType === queueType);
                const league = new league_1.League(leaguedata.leagueId, queueType, leaguedata.tier, leaguedata.rank, leaguedata.leaguePoints, leaguedata.wins, leaguedata.losses);
                return league;
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    }
}
exports.default = LeagueService;
//# sourceMappingURL=league.js.map