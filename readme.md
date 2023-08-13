# Rakan-lol.js

> A TypeScript library to simplify using the Riot Games API.

`Rakan-lol.js` is a TypeScript library designed to streamline the usage of the Riot Games API for League of Legends developers. This library provides easy-to-use functions to interact with the API and retrieve game-related data.

## Features

- Simplified API calls: Easily retrieve game data and statistics.
- Typed responses: TypeScript support for clear and type-safe responses.

## Installation

```bash
npm install rakan-lol.js
```

##Getting Started

Before using RiotEase, you need to obtain an API key from the Riot Developer Portal. Once you have your API key, you can start using the library.

```ts
import { RiotApi,Regions, Summoner, CahmpionMastery, QueueType,RiotApiConfig,League } from "rakan-lol.js";
RiotApiConfig.setApiKey("Api_Key")

const api = new RiotApi();

async function init(){
    // To get summoner data by summonername
    const summonerByName:Summoner = await api.getSummonerByName("jason dead",Regions.TR);
    // To get summoner data by summonerId
    const summonerById:Summoner = await api.getSummonerById(summonerByName.summonerId,Regions.TR);
    // To get summoner icon from http://ddragon.leagueoflegends.com/cdn
    const summonerIcon:string = await summonerById.getIcon();
    // To get summoner champion mastery
    const summonerChampionMastery:CahmpionMastery[] = await summonerById.getChampionMastery(); // return list
    // To get first summoner champion of champion mastery
    const summonerChampionMasteryChampion = await summonerChampionMastery[0].getCahmpion(); // return Champion
    // To get summoner League
    const league:League = await summonerById.getLeague(QueueType.SOLOQUEUE) // OR QueueType.FLEX
    // To get summoner League tier frame PNG from CDN
    const leagueTierFrame:string = await league.getTierFrame()

    // To get champion by name
    const championByName = await api.getChampionByName("Aatrox");
    console.log(championByName);
    
    
}   
init()
```
## License

This project is open-source and licensed under the MIT License. For more details, please see the "LICENSE" file.

![Rakan-lol](https://media.tenor.com/hD8Amv1_H5EAAAAd/rakan-cute.gif)

