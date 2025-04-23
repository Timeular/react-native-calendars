import React, {useMemo} from 'react';
import {View} from 'react-native';
import {calcTimeOffset} from './helpers/presenter';
import {HOUR_BLOCK_HEIGHT} from './Packer';
const NowIndicator = props => {
  const {styles, width, left} = props;
  const indicatorPosition = calcTimeOffset(HOUR_BLOCK_HEIGHT);
  const nowIndicatorStyle = useMemo(() => {
    return [styles.nowIndicator, {top: indicatorPosition, left}];
  }, [indicatorPosition, left]);
  return (
    <View
      // @ts-ignore - incompatible with Expo SDK 52 react-native-web types.
      style={nowIndicatorStyle}
    >
      <View
        // @ts-ignore - incompatible with Expo SDK 52 react-native-web types.
        style={[styles.nowIndicatorLine, {width}]}
      />
      <View
        // @ts-ignore - incompatible with Expo SDK 52 react-native-web types.
        style={styles.nowIndicatorKnob}
      />
    </View>
  );
};
export default NowIndicator;
