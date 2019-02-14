import React, {Component} from 'react'
import {Text, Button, StyleSheet} from 'react-native'
import {View} from 'react-native-ui-lib';
import * as action from '../stores/list_screen/Actions';
import TwoImageRaw from '../view/TwoImageRaw'

class PureScreen extends Component {

  static navigationOptions = {
    header: null ,
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  increase = () => {
    const increase = this.state.counter + 1;
    this.setState({
      counter: increase
    });
  };

  render() {
    const {navigate} = this.props.navigation;
    const counter = (this.state.counter > 0) ? this.state.counter : 'increase Me!!!';
    return (
      <View style={{flex: 1, paddingTop: 20}}>
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
        <TwoImageRaw/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center'
  }
});

export default PureScreen
