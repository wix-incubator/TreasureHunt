import React, {Component} from 'react'
import {Text, Button, StyleSheet} from 'react-native'
import {Constants} from 'expo'
import {View} from 'react-native-ui-lib';
import * as action from '../stores/list_screen/Actions';
import TwoImageRaw from '../view/TwoImageRaw'
import {hardWork} from "../Utils";

class PureScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  componentDidMount() {
    action.fetchNbaTeamsList();
  }

  increase = () => {
    const increase = hardWork(this.state.counter);
    this.setState({
      counter: increase
    });
  };

  render() {
    const {navigate} = this.props.navigation;
    const counter = (this.state.counter > 0) ? this.state.counter : 'increase Me!!!';
    return (
      <View center style={{flex: 1, paddingTop: Constants.statusBarHeight}}>
        <Button
          style={{flex: 0.1}}
          title="Go Home"
          onPress={() => navigate('home')}
        />
        <Text style={styles.text}>{counter}</Text>
        <Button
          title="increase Me"
          onPress={this.increase}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default PureScreen
