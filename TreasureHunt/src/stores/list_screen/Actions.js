import * as nbaService from '../../services/NbaService';
import * as store from './Store'

export function setItemSelected(id) {
  console.log('setItemSelected', id);
  if (store.getters.getTeamSelected(id)) {
    store.setters.setTeamSelected(id, false);
  } else {
    store.setters.setTeamSelected(id, true);
  }
}


export async function fetchNbaTeamsList() {
  try {
    const nbaTeams = await nbaService.loadNbaTeams();
    store.setters.setNbaTeams(nbaTeams);
  } catch (e) {
    store.setters.setResponseStatus(false);
  }
}
