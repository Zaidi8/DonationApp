import React from 'react';
import {View, Text, Image, ImageSourcePropType, Pressable} from 'react-native';
import useResponsiveScale from './Scalling';
import Badge from './Badge';
interface SingleDonationItemProps {
  image: string;
  badgeTitle: string;
  donationTitle: string;
  amount: string;
  onPress: () => void;
}

const SingleDonationItem: React.FC<SingleDonationItemProps> = ({
  image,
  badgeTitle,
  donationTitle,
  amount,
  onPress,
}) => {
  const {scaleFontSize, verticalScale, horizontalScale} = useResponsiveScale();
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexWrap: 'wrap',
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(10),
      }}>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          top: verticalScale(4),
          left: horizontalScale(1),
        }}>
        <Badge type={1} title={badgeTitle} />
      </View>
      <Image
        source={{uri: image}}
        style={{
          height: verticalScale(165),
          width: horizontalScale(150),
          borderRadius: 10,
        }}
      />
      <View>
        <Text
          numberOfLines={1}
          style={{
            fontSize: scaleFontSize(20),
            fontWeight: '600',
            color: '#0a043c',
            marginTop: verticalScale(16),
          }}>
          {donationTitle}
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: scaleFontSize(16),
            color: '#156cf7',
            marginTop: verticalScale(5),
          }}>
          {amount}
        </Text>
      </View>
    </Pressable>
  );
};
export default SingleDonationItem;
