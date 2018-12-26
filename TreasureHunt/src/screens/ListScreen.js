import React, {Component} from 'react'
import {FlatList, Button} from 'react-native'
import {connect} from 'remx'
import {View} from 'react-native-ui-lib';
import TeamListItem from '../view/TeamListItem';
import * as action from '../stores/list_screen/Actions';
import * as store from '../stores/list_screen/Store'

class ListScreen extends Component {

  static navigationOptions = {
    header: null ,
  };

  componentDidMount() {
    action.fetchNbaTeamsList();
    setInterval(() => {
      action.fetchNbaTeamsList();
    }, 15000);
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
        <FlatList
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.props.nbaTeamsArray}
          keyExtractor={(item) => item.idTeam}
          renderItem={({item}) => {
            return (
              <TeamListItem
                nbaTeamData={item}
                toggleSelected={(id) => {
                  action.setItemSelected(id);
                }}
              />
            )
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(ownProps) {
  return {
    nbaTeamsArray: store.getters.getTeamArr(),
    importantProp: store.getters.getDummyProp(),
  };
}

export default connect(mapStateToProps)(ListScreen)
