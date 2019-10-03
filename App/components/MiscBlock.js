/* @flow */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import FlashlightCard from './FlashlightCard';
import TimerCard from './TimerCard';
import CalculatorCard from './CalculatorCard';
import CameraCard from './CameraCard';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});

const MiscBlock = () => (
  <View style={styles.container}>
    <FlashlightCard />
    <TimerCard />
    <CalculatorCard />
    <CameraCard />
  </View>
);

export default MiscBlock;
