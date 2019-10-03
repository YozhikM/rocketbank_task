/* @flow */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import RoundIconWithTextButton from '../elements/RoundIconWithTextButton';

import airplaneIcon from '../images/airplane.png';
import cellularIcon from '../images/cellular.png';
import wifiIcon from '../images/wifi.png';
import bluetoothIcon from '../images/bluetooth.png';
import airDropIcon from '../images/airdrop.png';
import hotspotIcon from '../images/hotspot.png';
import {calcHalfCardSizes} from '../utils/utils';
import RoundIconButton from './RoundIconButton';

const styles = StyleSheet.create({
  contentContainer: {
    width: calcHalfCardSizes() * 2.5,
    height: calcHalfCardSizes() * 3.25,
    backgroundColor: '#78909C',
    borderColor: '#78909C',
    alignSelf: 'center',
    paddingVertical: 24,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 20,
    elevation: 1,
    shadowOffset: {width: 0, height: 1},
    shadowColor: 'black',
    shadowOpacity: 0.2,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const NetworkSettingsInnerCard = ({isFullScreen}) => {
  return (
    <>
      <View style={styles.row}>
        <RoundIconWithTextButton
          source={airplaneIcon}
          activeColor="#FFA726"
          text="Авиарежим"
          status={['Выкл.', 'Вкл.']}
          isFullScreen={isFullScreen}
        />
        <RoundIconWithTextButton
          source={cellularIcon}
          activeColor="#1DE9B6"
          text="Сотовые данные"
          status={['Выкл.', 'Вкл.']}
          isFullScreen={isFullScreen}
        />
      </View>

      <View style={styles.row}>
        <RoundIconWithTextButton
          source={wifiIcon}
          activeColor="#00B0FF"
          text="Wi-Fi"
          status={['Не подкл.', 'Enterprise']}
          isFullScreen={isFullScreen}
        />
        <RoundIconWithTextButton
          source={bluetoothIcon}
          activeColor="#00B0FF"
          text="Bluetooth"
          status={['Не подкл.', 'Вкл.']}
          isFullScreen={isFullScreen}
        />
      </View>

      {isFullScreen ? (
        <View style={styles.row}>
          <RoundIconWithTextButton
            source={airDropIcon}
            activeColor="#FFA726"
            text="AirDrop"
            status={['Прием выкл.', 'Для всех']}
            isFullScreen={isFullScreen}
          />
          <RoundIconWithTextButton
            source={hotspotIcon}
            activeColor="#1DE9B6"
            text="Режим модема"
            status={[
              'Обнаружение\nневозможно',
              'Видимость для\nдругих устройств',
            ]}
            isFullScreen={isFullScreen}
          />
        </View>
      ) : null}
    </>
  );
};

export default NetworkSettingsInnerCard;
