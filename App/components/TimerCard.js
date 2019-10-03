/* @flow */

import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';

import Card from './Card';

import timerIcon from '../images/timer.png';
import {iconSizeStyles} from '../utils/constants';

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    ...iconSizeStyles,
    tintColor: '#FFFFFF',
  },
});

type State = {
  isToggled: boolean,
};

export default class TimerCard extends Component<{}, State> {
  render() {
    return (
      <Card width="1/4" height="1/4">
        <View style={styles.iconContainer}>
          <Image source={timerIcon} resizeMode="contain" style={styles.icon} />
        </View>
      </Card>
    );
  }
}
