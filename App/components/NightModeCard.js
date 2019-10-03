/* @flow */

import React, {Component} from 'react';
import {Image, View, StyleSheet, LayoutAnimation} from 'react-native';

import Card from './Card';

import moonIcon from '../images/moon.png';
import {iconSizeStyles} from '../utils/constants';

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    ...iconSizeStyles,
    transform: [{rotate: '90deg'}],
  },
});

type State = {
  isToggled: boolean,
};

export default class NightModeCard extends Component<{}, State> {
  state: State = {
    isToggled: false,
  };

  onToggle = (isToggled: boolean) => {
    this.setState({isToggled});
  };

  getTintColor = () => {
    if (this.state.isToggled) {
      return {
        tintColor: '#673AB7',
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
            source={moonIcon}
            resizeMode="contain"
            style={[styles.icon, this.getTintColor()]}
          />
        </View>
      </Card>
    );
  }
}
