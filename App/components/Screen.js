/* @flow */

import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import MiscBlock from './MiscBlock';
import SettingsBlock from './SettingsBlock';
import TopBlock from './TopBlock';

export default class Screen extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TopBlock />

        <SettingsBlock />

        <MiscBlock />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ECEFF1',
    justifyContent: 'flex-end',
  },
});
