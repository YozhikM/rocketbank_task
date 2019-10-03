/* @flow */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import NetworkSettingsCard from './NetworkSettingsCard';
import {calcHalfCardSizes} from '../utils/utils';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  row: {
    width: calcHalfCardSizes() + 16,
    marginRight: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const TopBlock = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <NetworkSettingsCard />
    </View>
  </View>
);

export default TopBlock;
