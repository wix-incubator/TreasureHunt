import React, {Component} from 'react'
import {Image} from 'react-native-ui-lib'
import {ScrollView} from 'react-native'

let counter = -1;
const lightImg = <Image
  style={{height: 100, width: 100}}
  source={{uri: 'https://dantser.ru/wp-content/uploads/2017/02/1-hd-150x150.png'}}/>;

  // smaller image!! make sure that the img downloaded is as small as possible
const heavyImg = <Image
  style={{height: 100, width: 100}}
  source={{uri: 'https://static.wixstatic.com/media/01ecb7_a1ee476febb44855b962610a38a1d3f1~mv2_d_3392_2544_s_4_2.png'}}/>;

// change to pureComponent. avoid rerender
class TwoImageRaw extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  getItemToRender = () => {
    const arr = [];
    for (let i = 0; i < counter; i++) {
      for (let j = 0; j < 1000; j++) {
        if (j % 2 === 0) {
          arr.push(lightImg);
        } else {
          arr.push(heavyImg);
        }
      }
    }
    return arr;
  };

  render() {
    counter++;

    return (
      <ScrollView style={{flex: 1, directionalLockEnabled:false, horizontal: true}}>
        {this.getItemToRender()}
      </ScrollView>
    );
  }
}

export default TwoImageRaw
