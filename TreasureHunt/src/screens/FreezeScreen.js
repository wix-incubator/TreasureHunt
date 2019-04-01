import React, {Component} from 'react'
import {Button, StyleSheet, NativeModules} from 'react-native'
import {View, Text} from 'react-native-ui-lib';
import {hardWork} from "../Utils";

class PureScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      promiseOne: 'p1 wait...',
      promiseTwo: 'p2 wait...',
      promiseThree: 'p3 wait...'
    }
  }

  _shotPromises = async () => {
    await this._runP1();
    await this._runP2();
    await this._runP3();
  }

  _runP1 = async () => {
    await NativeModules.HardWorkerModule.work();
    this.setState({
      promiseOne: 'p1 finish'
    })
  };

  _runP2 = async () => {
    await NativeModules.HardWorkerModule.work();
    this.setState({
      promiseTwo: 'p2 finish'
    })
  };

  _runP3 = async () => {
    await NativeModules.HardWorkerModule.work();
    this.setState({
      promiseThree: 'p3 finish'
    })
  };

  increase = () => {
    this._shotPromises();
    const increase = hardWork(this.state.counter);
    this.setState({
      counter: increase
    });
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

export default PureScreen
