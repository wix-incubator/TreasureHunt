import React, {Component} from 'react'
import {View, Button} from 'react-native';
import * as action from '../stores/list_screen/actions';

class HomeScreen extends Component {

  intervalId;
  componentDidMount() {
    this.intervalId = setInterval(() => {
      action.setDummyProp(Math.random())
    }, 5000);
  }

  disableInterval = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
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
            title="Go to freeze screen"
            onPress={() => navigate('freeze')}/>
        </View>
        <View style={{marginTop: 8}}>
          <Button
            title="Click just when you have told"
            onPress={this.disableInterval}/>
        </View>
      </View>
    );
  }
}

export default HomeScreen
