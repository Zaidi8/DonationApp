import React from 'react';
import {View, SafeAreaView, ScrollView, Image, Text} from 'react-native';
import useResponsiveScale from '../components/Scalling';
import Badge from '../components/Badge';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../Types/StackNavigation';
import Header from '../components/Header';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

type DonationDetailsRouteProp = RouteProp<
  RootStackParamList,
  'DonationDetails'
>;

const DonationDetails: React.FC = () => {
  const route = useRoute<DonationDetailsRouteProp>();
  const {donation, badgeCategory} = route.params;
  const {horizontalScale, verticalScale, scaleFontSize} = useResponsiveScale();

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView>
        <BackButton />
        <View
          style={{
            marginHorizontal: horizontalScale(20),
            marginTop: verticalScale(7),
            height: verticalScale(240),
            marginBottom: verticalScale(20),
          }}>
          <Image
            source={{uri: donation.image}}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
              alignSelf: 'center',
              borderRadius: horizontalScale(5),
              marginHorizontal: horizontalScale(10),
            }}
          />
        </View>
        <View
          style={{
            marginBottom: horizontalScale(16),
            marginHorizontal: horizontalScale(12),
          }}>
          <Badge type={2} title={badgeCategory} />
        </View>
        <View
          style={{
            marginHorizontal: horizontalScale(30),
            marginBottom: horizontalScale(6),
          }}>
          <Header type={2} title={donation.name} />
        </View>
        <View style={{marginHorizontal: horizontalScale(34)}}>
          <Text
            style={{
              fontFamily: 'Inter-Medium',
              fontSize: scaleFontSize(14),
              fontWeight: '400',
              marginBottom: verticalScale(10),
            }}>
            {donation.description}
          </Text>
        </View>
      </ScrollView>
      <Button onPress={() => {}} title="Donate" />
    </SafeAreaView>
  );
};

export default DonationDetails;
