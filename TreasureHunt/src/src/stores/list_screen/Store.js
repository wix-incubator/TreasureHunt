import * as remx from 'remx';


const initialState = {
  nbaTeamsArray: [],
};

const state = remx.state(initialState);


export const getters = remx.getters({

  getTeamArr() {
    return state.nbaTeamsArray;
  },

  getTeamSelected(id) {
    return state.nbaTeamsArray.find((item) => item.idTeam === id).isSelected;
  },
});

export const setters = remx.setters({
  setNbaTeams(nbaTeams) {
    const isSelected = false;
    state.nbaTeamsArray = nbaTeams.teams.reduce((teamArr, team) => {
      teamArr.push({
        ...team,
      });
      return teamArr
    }, []);
    state.loading = false;
  },
  setTeamSelected(id, selected) {
    console.log(Date.now());
    state.nbaTeamsArray.sort((a, b) => b.idTeam - a.idTeam);
    console.log(Date.now());
    const teamArr = [...state.nbaTeamsArray];
    const teamIndex = teamArr.findIndex((item) => item.idTeam === id);
    const team = Object.assign({}, teamArr[teamIndex]);
    team.isSelected = selected;
    teamArr[teamIndex] = team;
    state.nbaTeamsArray = teamArr;
  }
});
