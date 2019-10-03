/* @flow */

import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';

import Card from './Card';

import flashlightIcon from '../images/flashlight.png';
import {iconSizeStyles} from '../utils/constants';

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: iconSizeStyles,
});

type State = {
  isToggled: boolean,
};

export default class FlashlightCard extends Component<{}, State> {
  state: State = {
    isToggled: false,
  };

  onToggle = (isToggled: boolean) => {
    this.setState({isToggled});
  };

  getTintColor = () => {
    if (this.state.isToggled) {
      return {
        tintColor: '#2196F3',
      };
    }
    return {
      tintColor: '#FFFFFF',
    };
  };

  render() {
    return (
      <Card width="1/4" height="1/4" isToggled onToggle={this.onToggle}>
        <View style={styles.iconContainer}>
          <Image
            source={flashlightIcon}
            resizeMode="contain"
            style={[styles.icon, this.getTintColor()]}
          />
        </View>
      </Card>
    );
  }
}
