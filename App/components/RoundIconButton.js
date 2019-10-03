/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Touchable from '../elements/Touchable';
import {calcIconSizes, calcQuarterCardSizes} from '../utils/utils';

const styles = StyleSheet.create({
  container: {
    width: calcQuarterCardSizes() / 1.2,
    height: calcQuarterCardSizes() / 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0BEC5',
    borderColor: '#B0BEC5',
    borderRadius: calcQuarterCardSizes() / 2,
  },
  icon: {
    width: calcIconSizes() / 1.25,
    height: calcIconSizes() / 1.25,
    tintColor: '#FFFFFF',
  },
});

type Props = {
  source: string,
  activeColor: string,
  onPress: () => void,
};

type State = {
  isActive: boolean,
};

export default class RoundIconButton extends Component<Props, State> {
  state: State = {
    isActive: false,
  };

  getColors = () => {
    return {
      backgroundColor: this.props.activeColor,
      borderColor: this.props.activeColor,
    };
  };

  onPress = () => {
    this.setState(
      prevState => ({isActive: !prevState.isActive}),
      () => {
        if (this.props.onPress) {
          this.props.onPress();
        }
      },
    );
  };

  render() {
    return (
      <Touchable onPress={this.onPress}>
        <View
          style={[styles.container, this.state.isActive && this.getColors()]}>
          <Image
            source={this.props.source}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      </Touchable>
    );
  }
}
