/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';

import Touchable from '../elements/Touchable';
import {calcQuarterCardSizes, calcHalfCardSizes} from '../utils/utils';

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 20,
    elevation: 1,
    shadowOffset: {width: 0, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    justifyContent: 'center',
  },
});

const {width, height} = Dimensions.get('screen');
const maxVal = Math.max(width, height);
const minVal = Math.min(width, height);

type Props = {
  children: React.ReactNode,
  width: '1/2' | '1/4',
  height: '1/2' | '1/4',
  isToggled?: boolean,
  isFullScreen?: boolean,
  onToggle?: () => void,
  showInnerCard?: () => void,
};

type State = {
  animatedValue: Animated.Value,
  isLongPress: boolean,
  isActiveState: boolean,
};

const sizeStyle = {
  '1/2': calcHalfCardSizes() + 16,
  '1/4': calcQuarterCardSizes(),
};

class Card extends Component<Props, State> {
  state: State = {
    animatedValue: new Animated.Value(0),
    isLongPress: false,
    isActiveState: false,
    sizeValue: new Animated.Value(0),
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.isFullScreen !== this.props.isFullScreen) {
      if (!nextProps.isFullScreen) {
        Animated.timing(this.state.sizeValue, {
          toValue: 0,
          duration: 450,
        }).start(() => {
          this.setState({isLongPress: false});
        });
      }
    }
  }

  onLongPress = () => {
    if (!this.props.isFullScreen && this.props.showInnerCard) {
      this.setState({isLongPress: true}, () => {
        Animated.timing(this.state.animatedValue, {
          toValue: 1,
          duration: 450,
        }).start(() => {
          Animated.timing(this.state.animatedValue, {
            toValue: 0,
            duration: 150,
          }).start();
          Animated.timing(this.state.sizeValue, {
            toValue: 1,
            duration: 450,
          }).start(() => {
            if (this.props.showInnerCard) {
              this.props.showInnerCard();
            }
          });
        });
      });
    }
  };

  onPress = () => {
    if (this.props.isToggled) {
      this.setState(
        prevState => ({
          isActiveState: !prevState.isActiveState,
        }),
        () => {
          if (this.props.onToggle) {
            this.props.onToggle(this.state.isActiveState);
          }
        },
      );
    }

    if (!this.props.isFullScreen) {
      Animated.timing(this.state.animatedValue, {
        toValue: 1,
        duration: 150,
      }).start(() => {
        Animated.timing(this.state.animatedValue, {
          toValue: 0,
          duration: 150,
        }).start();
      });
    }
  };

  getColors = () => {
    if (this.state.isActiveState) {
      return {
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
      };
    }
    return {
      backgroundColor: '#78909C',
      borderColor: '#78909C',
    };
  };

  render() {
    return (
      <Touchable onPress={this.onPress} onLongPress={this.onLongPress}>
        <Animated.View
          style={[
            styles.container,
            this.getColors(),
            {
              transform: [
                {
                  scale: this.state.animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, this.state.isLongPress ? 1.25 : 1.05],
                  }),
                },
              ],
              left: this.state.sizeValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, (minVal - calcHalfCardSizes() * 2) / 4],
              }),
              top: this.state.sizeValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, (maxVal - calcHalfCardSizes() * 3) / 2],
              }),

              width: this.state.isLongPress
                ? this.state.sizeValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      calcHalfCardSizes() + 16,
                      calcHalfCardSizes() * 2,
                    ],
                  })
                : sizeStyle[this.props.width],
              height: this.state.isLongPress
                ? this.state.sizeValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [
                      calcHalfCardSizes() + 16,
                      calcHalfCardSizes() * 3,
                    ],
                  })
                : sizeStyle[this.props.height],
            },
          ]}>
          {this.props.children}
        </Animated.View>
      </Touchable>
    );
  }
}

export default Card;
