/* @flow */

import React, {Component} from 'react';
import {Modal, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

import Card from './Card';

import NetworkSettingsInnerCard from './NetworkSettingsInnerCard';
import {calcHalfCardSizes} from '../utils/utils';

type State = {
  isFullScreen: boolean,
};

export default class NetworkSettingsCard extends Component<{}, State> {
  state = {
    isFullScreen: false,
  };

  onChangeFullScreen = () => {
    this.setState(prevState => ({isFullScreen: !prevState.isFullScreen}));
  };

  render() {
    return (
      <>
        <Modal visible={this.state.isFullScreen}>
          <TouchableWithoutFeedback onPress={this.onChangeFullScreen}>
            <View style={styles.inner}>
              <View style={styles.card}>
                <NetworkSettingsInnerCard isFullScreen />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <Card
          width="1/2"
          height="1/2"
          showInnerCard={this.onChangeFullScreen}
          isFullScreen={this.state.isFullScreen}>
          <NetworkSettingsInnerCard />
        </Card>
      </>
    );
  }
}

const styles = StyleSheet.create({
  inner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECEFF1',
  },
  card: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 20,
    elevation: 1,
    shadowOffset: {width: 0, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    justifyContent: 'center',
    backgroundColor: '#78909C',
    borderColor: '#78909C',
    width: calcHalfCardSizes() * 2,
    height: calcHalfCardSizes() * 3,
    alignSelf: 'center',
  },
});
