import React, {useRef, useState} from 'react';
import {SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import CredInput from '../components/Input/CredInput';
import Button from '../components/Button';
import useResponsiveScale from '../components/Scalling';
import TextButton from '../components/TextButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/StackNavigation';

const SignIn: React.FC = () => {
  const passwordInputRef = useRef<TextInput>(null);
  const {horizontalScale, verticalScale, scaleFontSize} = useResponsiveScale();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView className="bg-white flex-1 ">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginHorizontal: horizontalScale(24),
        }}>
        <View style={{marginBottom: verticalScale(24)}}>
          <Header type={2} title="Welcome Back" />
        </View>
        <View style={{marginBottom: verticalScale(24)}}>
          <CredInput
            lable="Email"
            placeholdder="Enter your email..."
            secureTextEntry={false}
            keyboardType="email-address"
            returnKeyType="next"
            autoFocus={true}
            onSubmitEditing={() => passwordInputRef.current?.focus()}
            onTextChange={val => {
              setEmail(val);
            }}
          />
        </View>
        <View style={{marginBottom: verticalScale(24)}}>
          <CredInput
            ref={passwordInputRef}
            lable="Password"
            placeholdder="********"
            secureTextEntry={true}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => {}}
            onTextChange={val => {
              setPassword(val);
            }}
          />
        </View>
        <View style={{marginBottom: verticalScale(10)}}>
          <Button
            title="Login"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <View className="items-center">
          <TextButton
            onPress={() => {
              navigation.navigate('Registration');
            }}
            title={`Don't have an account?`}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
