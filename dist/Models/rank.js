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
const queueType_enum_1 = require("../Constants/queueType.enum");
const dragon_1 = require("./dragon");
class Rank {
    constructor(leagueId, _queueType, tier, rank, leaguePoints, wins, losses) {
        this.leagueId = leagueId;
        this.queueType = _queueType;
        this.tier = tier;
        this.rank = rank;
        this.leaguePoints = leaguePoints;
        this.wins = wins;
        this.losses = losses;
    }
    getTierFram() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dragon_1.default.findTierFrameByName(this.tier);
        });
    }
    static getRank(summonerId, region, config, queueType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = `lol/league/v4/entries/by-summoner/${summonerId}`;
                const response = yield axios_1.default.get(`https://${region}.api.riotgames.com/${url}?api_key=${config.Api_key}`);
                const data = response.data;
                if (data.length === 0)
                    return;
                const rankdata = data.find((rankobject) => rankobject.queueType === queueType);
                const rank = new Rank(rankdata.leagueId, queueType, rankdata.tier, rankdata.rank, rankdata.leaguePoints, rankdata.wins, rankdata.losses);
                return rank;
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    }
    static getRanks(summonerId, region, config) {
        return __awaiter(this, void 0, void 0, function* () {
            let ranks = [];
            const rankTypes = [queueType_enum_1.QueueType.FLEX, queueType_enum_1.QueueType.SOLOQUEUE];
            for (let index = 0; index < rankTypes.length; index++) {
                const rankType = rankTypes[index];
                const rank = yield this.getRank(summonerId, region, config, rankType);
                ranks.push(rank);
            }
            return ranks;
        });
    }
}
exports.default = Rank;
//# sourceMappingURL=rank.js.map