import React from 'react';
import {View, Text} from 'react-native';
import useResponsiveScale from './Scalling';
interface HeaderProps {
  title: string;
  color?: string;
  type: number;
  leftIcon?: string;
  rightIcon?: string;
}
const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  type,
  color,
}) => {
  const {horizontalScale, verticalScale, scaleFontSize} = useResponsiveScale();
  const getHeaderFontSize = (type: number) => {
    switch (type) {
      case 1:
        return scaleFontSize(16);
      case 2:
        return scaleFontSize(22);
      case 3:
        return scaleFontSize(40);
      case 4:
        return scaleFontSize(50);
      default:
        return scaleFontSize(20);
    }
  };
  return (
    <View>
      <Text
        style={{
          color: color,
          fontSize: getHeaderFontSize(type),
          fontFamily: 'Montserrat-Bold',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
