import React from 'react';
import {useWindowDimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const useResponsiveScale = () => {
  const {width, height} = useWindowDimensions();
  const smallScreen = width <= 375 && !DeviceInfo.hasNotch();
  const guidelineBaseWidth = () => {
    if (smallScreen) {
      return 330;
    }
    return 375;
  };
  const horizontalScale = (size: number) =>
    Math.round((width / guidelineBaseWidth()) * size);
  const guidelineBaseHeight = () => {
    if (smallScreen) {
      return 550;
    } else if (width <= 410) {
      return 620;
    }
    return 680;
  };

  const verticalScale = (size: number) =>
    Math.round((height / guidelineBaseHeight()) * size);

  const guidelineBaseFontSize = () => {
    if (width >= 410) {
      return 430;
    }
    return 400;
  };

  const scaleFontSize = (size: number) =>
    Math.round((width / guidelineBaseFontSize()) * size);

  return {horizontalScale, verticalScale, scaleFontSize};
};
export default useResponsiveScale;
