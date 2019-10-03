/* @flow */

import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const minVal = Math.min(width, height);

export function calcQuarterCardSizes() {
  return Math.floor(minVal / 5.5);
}

export function calcHalfCardSizes() {
  return Math.floor(minVal / 2.75);
}

export function calcIconSizes() {
  return Math.floor(minVal / 11);
}
