import React, {Component} from 'react'
import {ActivityIndicator} from 'react-native'
import {View, Text, Image} from 'react-native-ui-lib';


class ImageWithLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showLoader: this.props.showLoader,
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.showLoader !== this.state.showLoader) {
      this.setState({
        showLoader: true
      })
    }
  }

  indicator = <ActivityIndicator size="large" color="#0000ff" style={{flex: 1}}/>;

  _onLoadComplete = () => {
    this.setState({
      showLoader: false
    })
  };

  render() {
    this.showLoader = !this.showLoader;
    return(
      <View flex>
        {this.state.showLoader && this.indicator}
        <Image
          onLoad={this._onLoadComplete}
          source={this.props.source}
          style={this.props.style}
          resizeMode='cover'
        />
      </View>
    );
  }
}

export default ImageWithLoader
