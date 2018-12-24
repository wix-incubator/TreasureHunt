import React, {Component} from 'react'
import {FlatList, Button} from 'react-native'
import {connect} from 'remx'
import {View} from 'react-native-ui-lib';
import TeamListItem from '../view/TeamListItem';
import * as action from '../stores/list_screen/Actions';
import * as store from '../stores/list_screen/Store'

class ListAScreen extends Component {

  static navigationOptions = {
    header: null ,
  };

  componentDidMount() {
    // setInterval(() => {
    action.fetchNbaTeamsList();
    // }, 1000);
  }

  shouldComponentUpdate(nextProps) {
    const {nbaTeamsArray} = this.props;
    const nbaTeamsArray1 = nextProps.nbaTeamsArray;
    console.log('nbaTeamsArray', nbaTeamsArray);
    console.log('nbaTeamsArray', nbaTeamsArray1);
    return true
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
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
  };
}

export default connect(mapStateToProps)(ListAScreen)
