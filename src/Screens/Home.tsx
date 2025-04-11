import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import {useFonts} from 'expo-font';
import Header from '@/src/components/Header';
import SearchInput from '@/src/components/SearchInput';
import SingleDonationItem from '@/src/components/SingleDonationItem';
import {useSelector, useDispatch} from 'react-redux';
import store from '@/src/Redux/Reducers/Store';
import useResponsiveScale from '@/src/components/Scalling';
import Tab from '@/src/components/Tab';
import {updateSelectedCategoryId} from '@/src/Redux/Reducers/Categories';
import usePagination from '@/hooks/Pagination';
import {updateSelectedDonationId} from '../Redux/Reducers/Donations';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/StackNavigation';

const Home: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('@/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('@/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('@/assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-ExtraLight': require('@/assets/fonts/Montserrat-ExtraLight.ttf'),
    'Montserrat-Light': require('@/assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-SemiBold': require('@/assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Thin': require('@/assets/fonts/Montserrat-Thin.ttf'),
    'Inter-Black': require('@/assets/fonts/Inter_18pt-Black.ttf'),
    'Inter-Bold': require('@/assets/fonts/Inter_18pt-Bold.ttf'),
    'Inter-ExtraBold': require('@/assets/fonts/Inter_18pt-ExtraBold.ttf'),
    'Inter-ExtraLight': require('@/assets/fonts/Inter_18pt-ExtraLight.ttf'),
    'Inter-Light': require('@/assets/fonts/Inter_18pt-Light.ttf'),
    'Inter-Medium': require('@/assets/fonts/Inter_18pt-Medium.ttf'),
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {scaleFontSize, horizontalScale, verticalScale} = useResponsiveScale();

  const user = useSelector(
    (state: ReturnType<typeof store.getState>) => state.user,
  );
  const categories = useSelector(
    (state: ReturnType<typeof store.getState>) => state.categories,
  );
  const selectedCategoryId = useSelector(
    (state: ReturnType<typeof store.getState>) =>
      state.categories.selectedCatagoryId,
  );
  const donations = useSelector(
    (state: ReturnType<typeof store.getState>) => state.donations,
  );
  const selectedDonationId = useSelector(
    (state: ReturnType<typeof store.getState>) =>
      state.donations.selectedDonationId,
  );
  const dispatch = useDispatch();
  const {renderedData, isLoading, loadMore} = usePagination(
    categories.categories,
    4,
  );

  const [donationItems, setDonationItems] = useState<typeof donations.items>(
    [],
  );

  useEffect(() => {
    const items = donations.items.filter(value =>
      value.categoryIds.includes(selectedCategoryId),
    );
    setDonationItems(items);
  }, [categories.selectedCatagoryId]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              color: 'gray',
              fontSize: scaleFontSize(18),
              marginHorizontal: horizontalScale(20),
            }}>
            Hello,
          </Text>
          <View
            style={{
              marginHorizontal: horizontalScale(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Header type={3} title={user.firstName + ' ' + '👋🏻'} />
            <Image
              source={{uri: user.proileImage}}
              resizeMode="contain"
              style={{height: 50, width: 50}}
            />
          </View>
          <SearchInput
            placeholder="Search"
            onChangeText={value => console.log(value)}
          />
          <Pressable style={{marginHorizontal: horizontalScale(24)}}>
            <Image
              resizeMode="contain"
              source={require('@/assets/images/banner.png')}
              style={{height: verticalScale(140), width: '100%'}}
            />
          </Pressable>
          <View style={{marginHorizontal: horizontalScale(20)}}>
            <Header type={2} title="Selected Category" />
          </View>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={loadMore}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={renderedData}
            style={{marginHorizontal: horizontalScale(20)}}
            renderItem={({item}) => (
              <View
                style={{marginHorizontal: horizontalScale(8)}}
                key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  title={item.name}
                  isActive={item.categoryId === selectedCategoryId}
                  onPress={() =>
                    dispatch(updateSelectedCategoryId(item.categoryId))
                  }
                />
              </View>
            )}
          />
          {donationItems.length > 0 && (
            <View className="flex-row flex-wrap justify-between">
              {donationItems.map(value => (
                <View className="max-w-[49%]" key={value.donationItemId}>
                  <SingleDonationItem
                    onPress={() => {
                      dispatch(updateSelectedDonationId(value.donationItemId));
                      const badgeCategory =
                        categories.categories.find(
                          cat => cat.categoryId === selectedCategoryId,
                        )?.name || 'Unknown';
                      navigation.navigate('DonationDetails', {
                        donation: value,
                        badgeCategory,
                      });
                    }}
                    image={value.image}
                    amount={'$' + value.price}
                    donationTitle={value.name}
                    badgeTitle={
                      categories.categories.filter(
                        val => val.categoryId === selectedCategoryId,
                      )[0].name
                    }
                  />
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
