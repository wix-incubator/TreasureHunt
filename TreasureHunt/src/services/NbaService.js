import * as config from '../Config';
import {requestEndPoint} from "../NetworkUtils";


export async function loadNbaTeams() {
  const endPointUrl = `${config.baseUrl}${config.endpoints.teams}`;
  const errorMessage = 'failed loading teams';
  return await requestEndPoint(endPointUrl, errorMessage);
}

export async function loadNbaTeamPlayers(teamName) {
  const endPointUrl = `${config.baseUrl}${config.endpoints.players}t=${teamName}`;
  const errorMessage = 'failed loading players';
  return await requestEndPoint(endPointUrl, errorMessage);
}
