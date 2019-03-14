import React, {Component} from 'react'
import {ScrollView, Image, View} from 'react-native'

let counter = -1;
const lightImg = <Image
  style={{alignSelf: 'stretch', width:'50%', height: '100%'}}
  resizeMode='cover'
  source={{uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=150'}}/>;

const heavyImg = <Image
  style={{alignSelf: 'stretch', width:'50%', height: '100%'}}
  resizeMode='cover'
  source={{uri: 'http://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=2000'}}/>;

class TwoImageRaw extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  getItemToRender = () => {
    const arr = [];
    const images = {
      imgOne: undefined,
      imgTwo: undefined
    };
    for (let i = 0; i < counter; i++) {
      for (let j = 0; j < 1000; j++) {
        if (j % 2 === 0) {
          images.imgOne = lightImg;
        } else {
          images.imgTwo = heavyImg;
          arr.push(this._putTwoImagesInRow(images))
        }
      }
    }
    return arr;
  };

  _putTwoImagesInRow(images) {
    return <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', height: 100}}>
      {images.imgOne}
      {images.imgTwo}
    </View>

  }

  render() {
    counter++;

    return (
      <ScrollView style={{flex: 1, directionalLockEnabled: false, horizontal: true}}>
        {this.getItemToRender()}
      </ScrollView>
    );
  }
}

export default TwoImageRaw
