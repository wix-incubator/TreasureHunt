import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {View} from 'react-native-ui-lib'
import ImageWithLoader from './ImageWithLoader'

let counter = -1;
class TwoImageRaw extends Component {

  getItemToRender = () => {
    const images = {
      imgOne: this.lightImg,
      imgTwo: this.heavyImg
    };
    return this._putTwoImagesInRow(images);
  };

  _putTwoImagesInRow(images) {
    return <View style={styles.imageContainer}>
      {<ImageWithLoader
        showLoader={true}
        style={{alignSelf: 'stretch', width:'100%', height: '50%'}}
        source={{uri: `https://dantser.ru/wp-content/uploads/2017/02/1-hd-150x150.png?2= + ${new Date().getTime()}`}}/>}
      {<ImageWithLoader
        showLoader={true}
        style={{alignSelf: 'stretch', width:'100%', height: '50%'}}
        source={{uri: `https://static.wixstatic.com/media/c1d613_1169f0b9004b442fa4e4d58651a01568~mv2_d_3647_5470_s_4_2.jpg?3= + ${new Date().getTime()}`}}/>}
    </View>
  }

  render() {
    return (
      this.getItemToRender()
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100
  }
});

export default TwoImageRaw
