import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

class DownloadScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    progress: 0,
    progressInterval: undefined,
  };

  checkProgress = () => {
    getImageProgress().then(progress => {
      this.setState({progress});
      if (progress >= 1) {
        this.clearTimer();
      }
    });
  };

  startDownload = () => {
    this.reset();
    this.checkProgress();
    const progressInterval = setInterval(this.checkProgress, 1000);
    this.setState({progressInterval});
  };

  clearTimer = () => {
    clearInterval(this.state.progressInterval);
    this.setState({progressInterval: undefined});
  };

  reset = () => {
    this.setState({progress: 0});
  };

  hasFinished = () => {
    return this.state.progress >= 1;
  };

  renderButton = () => {
    if (this.state.progressInterval) {
      return <Button title='Stop' onPress={this.clearTimer}/>;
    } else if (this.hasFinished()) {
      return <Button title='Clear' onPress={this.reset}/>;
    } else {
      return <Button title='Download' onPress={this.startDownload}/>;
    }
  };

  render() {
    const width = (this.state.progress * 100) + '%';
    return (
      <View style={style.page}>
        <View style={style.progressContainer}>
          <View style={[style.progress, {width}]}>
          </View>
        </View>
        <View style={style.buttonContainer}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 60,
  },
  progressContainer: {
    margin: 10,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#E1E2E1',
  },
  progress: {
    flex: 1,
    width: 100,
    backgroundColor: '#43a047',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DownloadScreen;


//API sample, no need to change code below
const progressSequence = [0.10, 0.3, 0.4, 0.59, 0.8, 1];
let currentProgressIndex = -1;
const getImageProgress = () => {
  if (currentProgressIndex >= progressSequence.length - 1) {
    currentProgressIndex = 0;
  } else {
    currentProgressIndex += 1;
  }
  return Promise.resolve(progressSequence[currentProgressIndex]);
};
