import * as dotenv from "dotenv";
dotenv.config();
class RiotApiConfig {
  static setApiKey(api_key:string){
    process.env['api_key'] = api_key;
  }
  static getApiKey(){
    return process.env['api_key']
  }

}

export {RiotApiConfig};
