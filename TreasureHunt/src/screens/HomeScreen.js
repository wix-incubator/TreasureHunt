import React, {Component} from 'react'
import {View, Button} from 'react-native';

class HomeScreen extends Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{flex: 1}}>
          <Button
          title="Go to team list"
          onPress={() => navigate('list')}
        />
        </View>
      );
    }
}

export default HomeScreen
