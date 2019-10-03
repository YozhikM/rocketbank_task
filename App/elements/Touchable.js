/* @flow */

import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

type Props = {
  onPress: () => void,
  onLongPress: () => void,
};

const Touchable = (props: Props) => {
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={props.onPress}
        onLongPress={props.onLongPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        {props.children}
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      activeOpacity={0.9}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Touchable;
