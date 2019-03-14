import React, {Component} from 'react'
import {View, Button} from 'react-native';

class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <View>
          <Button
            title="Go to team list"
            onPress={() => navigate('list')}
          />
        </View>

        <View>
          <Button
            title="Go to animated button screen"
            onPress={() => navigate('animatedButton')}
          />
        </View>

        <View>
          <Button
            title="Go to images screen"
            onPress={() => navigate('images')}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen
