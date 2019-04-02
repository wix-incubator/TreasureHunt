import React, {Component} from 'react'
import {Button, StyleSheet} from 'react-native'
import {View, Text} from 'react-native-ui-lib';
import {hardWork, nativeHardWork} from "../Utils";

class FreezeScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      promiseOne: 'P1 wait...',
      promiseTwo: 'P2 wait...',
      promiseThree: 'P3 wait...'
    }
  }

  _shotPromises = async () => {
    await this._runP1();
  };

  _runP1 = async () => {
    await nativeHardWork();
    this.setState({
      promiseOne: 'P1 finish'
    });
    setTimeout(async () => await this._runP2());
  };

  _runP2 = async () => {
    await nativeHardWork();
    this.setState({
      promiseTwo: 'P2 finish'
    });
    setTimeout(async () => await this._runP3());
  };

  _runP3 = async () => {
    await nativeHardWork();
    this.setState({
      promiseThree: 'P3 finish'
    })
  };

  increase = () => {
    const increase = hardWork(this.state.counter);
    this.setState({
      counter: increase
    });
    setTimeout(this._shotPromises, 1000);
  };

  render() {
    const {navigate} = this.props.navigation;
    const counter = (this.state.counter > 0) ? this.state.counter : 'increase Me!!!';
    return (
      <View flex style={styles.container}>
        <View center>
          <Button
            title="Go Home"
            onPress={() => navigate('home')}
          />
          <Text style={styles.text}>{counter}</Text>
          <Button
            title="increase Me"
            onPress={this.increase}
          />
        </View>
        <View flex style={styles.promisesContainer}>
          <Text flex center>
            {this.state.promiseOne}
          </Text>
          <Text flex center>
            {this.state.promiseTwo}
          </Text>
          <Text flex center>
            {this.state.promiseThree}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    paddingTop: 20
  },
  promisesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
});

export default FreezeScreen
