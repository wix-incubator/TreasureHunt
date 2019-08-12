import * as remx from 'remx';


const initialState = {
  nbaTeamsArray: [],
  dummy: 1
};

const state = remx.state(initialState);


export const getters = remx.getters({

  getTeamArr() {
    return state.nbaTeamsArray;
  },

  getTeamSelected(id) {
    return state.nbaTeamsArray.find((item) => item.idTeam === id).isSelected;
  },
  getDummyProp() {
    return state.dummy;
  }
});

export const setters = remx.setters({
  setNbaTeams(nbaTeams) {
    const isSelected = false;
    const teamArr = nbaTeams.teams.reduce((teamArr, team) => {
      teamArr.push({
        ...team,
      });
      return teamArr
    }, []);
    state.nbaTeamsArray = [...teamArr, ...state.nbaTeamsArray];
    state.loading = false;
  },
  setTeamSelected(id, selected) {
    const teamArr = [...state.nbaTeamsArray];
    const teamIndex = teamArr.findIndex((item) => item.idTeam === id);
    const team = Object.assign({}, teamArr[teamIndex]);
    team.isSelected = selected;
    teamArr[teamIndex] = team;
    state.nbaTeamsArray = teamArr;
  },
  setDummyProp(dummy) {
    state.dummy = dummy;
  }
});
