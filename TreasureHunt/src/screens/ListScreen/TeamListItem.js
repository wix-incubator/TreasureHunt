import React, {PureComponent} from 'react'
import {Text, Card, View, TouchableOpacity, Image, StyleSheet} from 'react-native'

class TeamListItem extends PureComponent {
  handlePress = () => {
    this.props.toggleSelected(this.props.nbaTeamData.idTeam);
  };

  render() {
    const {idTeam, strTeamLogo, strTeam} = this.props.nbaTeamData;
    return (
      <TouchableOpacity
        onPress={this.handlePress}
        key={idTeam}
        style={styles.container}
        elevation={4}
      >
        <View style={{backgroundColor: this.props.nbaTeamData.isSelected ? '#aaaaaa' : '#eeeeee'}}>
          <View>
            <Image
              style={styles.image}
              source={{uri: strTeamLogo}}/>
          </View>
          <View style={styles.border}/>
        </View>
        <View flex center>
          <Text style={styles.text}>
            {strTeam}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginStart: 4,
    marginEnd: 4,
    width: '49%',
    height: 120,
  },
  image: {
    width: '100%',
    height: 60,
    marginTop: 8,
    resizeMode: 'contain',
  },
  border: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 16,
    borderColor: 'blue',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8
  }
});

export default TeamListItem
