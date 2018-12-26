import React, {Component} from 'react'
import {View, Button} from 'react-native';
import * as action from '../stores/list_screen/Actions';
import * as store from '../stores/list_screen/Store'

class HomeScreen extends Component {

  componentDidMount() {
    setInterval(() => {
      action.setDummyProp({})
    }, 5000);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <Button
          title="Go to team list"
          onPress={() => navigate('list')}/>
        <View style={{marginTop: 8}}>
          <Button
            title="Go to pure screen"
            onPress={() => navigate('pure')}/>
        </View>
        <View style={{marginTop: 8}}>
          <Button
            title="Go to simple screen"
            onPress={() => navigate('freeze')}/>
        </View>
      </View>
    );
  }
}

export default HomeScreen
