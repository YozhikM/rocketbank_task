/* @flow */

import React, {Component} from 'react';
import {Image, View, StyleSheet, Animated} from 'react-native';

import Card from './Card';

import lockIcon from '../images/lock.png';
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
  value: Animated.Value,
  isToggled: boolean,
  rotateOutputRange: [string, string],
};

export default class LockOrientationCard extends Component<{}, State> {
  state: State = {
    value: new Animated.Value(0),
    rotateOutputRange: ['0deg', '360deg'],
    isToggled: false,
  };

  onToggle = (isToggled: boolean) => {
    this.setState({isToggled}, () => {
      if (!isToggled) {
        this.setState({rotateOutputRange: ['0deg', '360deg']}, () => {
          Animated.timing(this.state.value, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true,
          }).start(() => {
            this.setState({value: new Animated.Value(0)});
          });
        });
      } else {
        this.setState({rotateOutputRange: ['0deg', '-30deg']}, () => {
          Animated.timing(this.state.value, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            Animated.timing(this.state.value, {
              toValue: 0,
              duration: 450,
              useNativeDriver: true,
            }).start();
          });
        });
      }
    });
  };

  getTintColor = () => {
    if (this.state.isToggled) {
      return {
        tintColor: '#F44336',
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
          <Animated.Image
            source={lockIcon}
            resizeMode="contain"
            style={[
              styles.icon,
              this.getTintColor(),
              {
                transform: [
                  {
                    rotate: this.state.value.interpolate({
                      inputRange: [0, 1],
                      outputRange: this.state.rotateOutputRange,
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </Card>
    );
  }
}
