/* @flow */

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RoundIconButton from '../components/RoundIconButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  title: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  status: {
    marginTop: 4,
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

const RoundIconWithTextButton = (props: Props) => {
  const [isActive, setActiveState] = useState(false);
  return (
    <View style={styles.container}>
      <RoundIconButton
        source={props.source}
        activeColor={props.activeColor}
        onPress={() => setActiveState(!isActive)}
      />
      {props.isFullScreen ? (
        <>
          <Text style={styles.title}>{props.text}</Text>
          <Text style={styles.status}>{props.status[Number(isActive)]}</Text>
        </>
      ) : null}
    </View>
  );
};

export default RoundIconWithTextButton;
