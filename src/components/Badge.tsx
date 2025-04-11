import React, {useState} from 'react';
import {Text, View} from 'react-native';
import useResponsiveScale from './Scalling';

interface BadgeProps {
  title: string;
  type: number;
}

const Badge: React.FC<BadgeProps> = ({title, type}) => {
  const {horizontalScale, verticalScale, scaleFontSize} = useResponsiveScale();
  const paddingHorizontal = 16;
  const badgeType = (type: number) => {
    switch (type) {
      case 1:
        return scaleFontSize(12);
      case 2:
        return scaleFontSize(16);
      case 3:
        return scaleFontSize(24);
      case 4:
        return scaleFontSize(36);
      default:
        return scaleFontSize(20);
    }
  };

  const [width, setWidth] = useState(0);
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View
      style={[
        tabWidth,
        {
          backgroundColor: 'green',
          paddingVertical: verticalScale(6),
          marginHorizontal: horizontalScale(10),
          marginTop: verticalScale(10),
          borderRadius: 100,
        },
      ]}>
      <Text
        onTextLayout={even => {
          setWidth(even.nativeEvent.lines[0].width);
        }}
        style={[
          {
            fontSize: badgeType(type),
            fontFamily: 'montserrat-bold',
            color: 'white',
            textAlign: 'center',
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default Badge;
