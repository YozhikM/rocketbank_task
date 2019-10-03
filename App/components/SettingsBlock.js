/* @flow */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import ScreenMirrorCard from './ScreenMirrorCard';
import LockOrientationCard from './LockOrientationCard';
import NightModeCard from './NightModeCard';
import {calcHalfCardSizes} from '../utils/utils';
import SliderCard from './SliderCard';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  iconButtonsContainer: {
    width: calcHalfCardSizes() + 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  row: {
    width: calcHalfCardSizes() + 16,
    marginRight: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const SettingsBlock = () => (
  <View style={styles.container}>
    <View>
      <View style={styles.iconButtonsContainer}>
        <LockOrientationCard />
        <NightModeCard />
      </View>
      <ScreenMirrorCard />
    </View>
    <View style={styles.row}>
      <SliderCard />
      <SliderCard />
    </View>
  </View>
);

export default SettingsBlock;
