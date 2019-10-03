/* @flow */

import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import screenMirrorIcon from '../images/screen_mirror.png';
import Card from './Card';
import {iconSizeStyles} from '../utils/constants';

const styles = StyleSheet.create({
  iconContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    ...iconSizeStyles,
    tintColor: '#FFFFFF',
  },
  text: {
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginLeft: 8,
  },
});

const ScreenMirrorCard = () => (
  <Card width="1/2" height="1/4">
    <View style={styles.iconContainer}>
      <Image
        source={screenMirrorIcon}
        resizeMode="contain"
        style={styles.icon}
      />
      <Text style={styles.text}>{'Повтор\nэкрана'}</Text>
    </View>
  </Card>
);

export default ScreenMirrorCard;
