import React, {useRef, useState} from 'react';
import {SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import CredInput from '../components/Input/CredInput';
import Button from '../components/Button';
import useResponsiveScale from '../components/Scalling';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/StackNavigation';
import BackButton from '../components/BackButton';
import {createUser} from '@/API/users';

const SignUp: React.FC = () => {
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const {horizontalScale, verticalScale, scaleFontSize} = useResponsiveScale();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView className="bg-white flex-1 ">
      <BackButton />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginHorizontal: horizontalScale(24),
        }}>
        <View style={{marginBottom: verticalScale(24)}}>
          <Header type={2} title="Hello and Welcome!" />
        </View>
        <View style={{marginBottom: verticalScale(24)}}>
          <CredInput
            lable="First & Last Name"
            placeholdder="Enter your full name..."
            secureTextEntry={false}
            keyboardType="default"
            returnKeyType="next"
            autoFocus={true}
            onSubmitEditing={() => emailInputRef.current?.focus()}
            onTextChange={val => {
              setFullName(val);
            }}
          />
        </View>
        <View style={{marginBottom: verticalScale(24)}}>
          <CredInput
            ref={emailInputRef}
            lable="Email"
            placeholdder="Enter your email..."
            secureTextEntry={false}
            keyboardType="email-address"
            returnKeyType="next"
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
            title="Register"
            onPress={async () => await createUser(fullName, email, password)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
