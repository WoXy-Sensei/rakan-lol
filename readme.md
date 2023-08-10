# Rakan-lol

> A TypeScript library to simplify using the Riot Games API.

`Rakan-lol` is a TypeScript library designed to streamline the usage of the Riot Games API for League of Legends developers. This library provides easy-to-use functions to interact with the API and retrieve game-related data.

## Features

- Simplified API calls: Easily retrieve game data and statistics.
- Typed responses: TypeScript support for clear and type-safe responses.

## Installation

```bash
npm install rakan-lol
```

##Getting Started

Before using RiotEase, you need to obtain an API key from the Riot Developer Portal. Once you have your API key, you can start using the library.

```ts

import { RiotApi } from "rakan-lol";
import { CahmpionMastery, Champion, QueueType, Regions, RiotApiConfig,Summoner,Rank } from "rakan-lol";


const apiConfig = new RiotApiConfig("api_key");
const api = new RiotApi(apiConfig);

async function init(){
    // To get summoner data by summonername
    const summonerByName:Summoner = await api.getSummonerByName("jason dead",Regions.EUW);
    // To get summoner data by summonerId
    const summonerById:Summoner = await api.getSummonerById(summonerByName.summonerId,Regions.EUW);
    // To get summoner icon from http://ddragon.leagueoflegends.com/cdn
    const summonerIcon:string = await summonerById.getIcon();
    // To get summoner champion mastery
    const summonerChampionMastery:CahmpionMastery[] = await summonerById.getChampionMastery(); // return list
    // To get first summoner champion of champion mastery
    const summonerChampionMasteryChampion:Champion = await summonerChampionMastery[0].getCahmpion(); // return Champion
    // To get champion icon from http://ddragon.leagueoflegends.com/cdn
    const championIcon:string = await summonerChampionMasteryChampion.getIcon();
    // To get summoner rank
    const rank:Rank = await summonerById.getRank(QueueType.SOLOQUEUE) // OR QueueType.FLEX
    // To get summoner rank tier frame PNG from CDN
    const rankTierFrame:string = await rank.getTierFram()

    // To get champion by name
    const championByName:Champion = await api.getChampionByName("Aatrox");
    console.log(championByName);
    
    
}   
```
## License

This project is open-source and licensed under the MIT License. For more details, please see the "LICENSE" file.

![Rakan-lol](https://media.tenor.com/hD8Amv1_H5EAAAAd/rakan-cute.gif)

