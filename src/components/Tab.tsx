import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import useResponsiveScale from './Scalling';

interface TabProps {
  tabId: number;
  title: string;
  onPress: () => void;
  isActive: boolean;
}

const Tab: React.FC<TabProps> = ({title, onPress, isActive, tabId}) => {
  const {horizontalScale, verticalScale, scaleFontSize} = useResponsiveScale();
  const paddingHorizontal = 33;
  const [width, setWidth] = useState(0);
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <TouchableOpacity
      style={[
        tabWidth,
        {
          backgroundColor: isActive ? '#2563eb' : '#d8d8d8',
          padding: horizontalScale(12),
          marginTop: verticalScale(4),
          borderRadius: 100,
        },
      ]}
      onPress={onPress}>
      <Text
        numberOfLines={1}
        onTextLayout={even => {
          setWidth(even.nativeEvent.lines[0].width);
        }}
        style={[
          {
            fontSize: scaleFontSize(16),
            fontWeight: '500',
            color: isActive ? 'white' : '#6c6c6c',
            textAlign: 'center',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;
