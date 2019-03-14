import React, {Component} from 'react'
import {ScrollView, Button, View} from 'react-native'
import {connect} from 'remx'
import TeamListItem from './TeamListItem';
import * as nbaService from '../../services/NbaService';

class ListScreen extends Component {

  static navigationOptions = {
    header: null ,
  };

  state = {
    nbaTeams: [],
  }

  componentDidMount() {
    this.loadTeams();
  }

  async loadTeams() {
    const {teams} = await nbaService.loadNbaTeams();
    this.setState({
      nbaTeams: [...teams, ...this.state.nbaTeams],
    });
  }

  selectItem(id) {
    const index = this.state.nbaTeams.findIndex(({idTeam}) => id === idTeam);
    const item = this.state.nbaTeams[index];
    const newTeams = [...this.state.nbaTeams];
    const newItem = {...item, isSelected: !item.isSelected};
    newTeams[index] = newItem;
    this.setState({nbaTeams: newTeams})
  }

  render() {
    const {navigate} = this.props.navigation;
    console.log('render');
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Button
          style={{flex: 0.1}}
          title="Go Home"
          onPress={() => navigate('home')}
        />
        <ScrollView>
          {this.state.nbaTeams.map(item => (
            <TeamListItem
              nbaTeamData={item}
              toggleSelected={(id) => {
                this.selectItem(id);
              }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default ListScreen;
