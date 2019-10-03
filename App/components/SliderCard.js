/* @flow */

import React, {Component} from 'react';
import {StyleSheet, Slider} from 'react-native';

import Card from './Card';

const styles = StyleSheet.create({
  slider: {
    // height: calcQuarterCardSizes(),
    // width: calcHalfCardSizes() + 16,
  },
});

export default class SliderCard extends Component {
  render() {
    return (
      <Card width="1/4" height="1/2">
        <Slider
          value={0.5}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#78909C"
          style={styles.slider}
        />
      </Card>
    );
  }
}
