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
exports.League = void 0;
const dragon_1 = require("../services/dragon");
class League {
    constructor(leagueId, _queueType, tier, rank, leaguePoints, wins, losses) {
        this.leagueId = leagueId;
        this.queueType = _queueType;
        this.tier = tier;
        this.rank = rank;
        this.leaguePoints = leaguePoints;
        this.wins = wins;
        this.losses = losses;
    }
    getTierFrame() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield dragon_1.default.findTierFrameByName(this.tier);
        });
    }
}
exports.League = League;
//# sourceMappingURL=league.js.map