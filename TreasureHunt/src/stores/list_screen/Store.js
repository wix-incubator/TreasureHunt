import * as remx from 'remx';


const initialState = {
  loading: true,
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

  isLoading() {
    return state.loading;
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
    const teamArr = [...state.nbaTeamsArray];
    const teamIndex = teamArr.findIndex((item) => item.idTeam === id);
    teamArr[teamIndex].isSelected = selected;
    state.nbaTeamsArray = teamArr;
  }
});
