import React, {Component} from 'react'
import {Text, Button, StyleSheet, View} from 'react-native'
import {hardWork} from "../../Utils";

class AnimatedButtonScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
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
      <View center style={{flex: 1, paddingTop: 20}}>
        <Button
          style={{flex: 0.1}}
          title="Go Home"
          onPress={() => navigate('home')}
        />
        <Text style={styles.text}>{counter}</Text>
        <Button
          title="Increase Me"
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

export default AnimatedButtonScreen
