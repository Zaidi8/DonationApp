import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../components/Header';
import CredInput from '../components/Input/CredInput';
import Button from '../components/Button';
import useResponsiveScale from '../components/Scalling';
import TextButton from '../components/TextButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/StackNavigation';
import {signInUser} from '../../API/login';

const SignIn: React.FC = () => {
  const passwordInputRef = useRef<TextInput>(null);
  const {horizontalScale, verticalScale, scaleFontSize} = useResponsiveScale();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <KeyboardAvoidingView className="flex-1">
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
            {errorMessage !== '' && (
              <Text
                style={{
                  color: 'red',
                  marginBottom: verticalScale(12),
                  textAlign: 'center',
                  fontSize: scaleFontSize(14),
                }}>
                {errorMessage}
              </Text>
            )}
            {loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Button
                title="Login"
                onPress={async () => {
                  setErrorMessage('');
                  setLoading(true);
                  try {
                    const result = await signInUser(email, password);
                    navigation.replace('Home');
                  } catch (err: any) {
                    let msg = 'Something went wrong. Please try again.';
                    if (err.code === 'auth/user-not-found') {
                      msg = 'No account found with this email.';
                    } else if (err.code === 'auth/wrong-password') {
                      msg = 'Incorrect password. Please try again.';
                    } else if (err.code === 'auth/invalid-email') {
                      msg = 'Invalid email format.';
                    } else if (err.code === 'auth/missing-password') {
                      msg = 'Please enter a valid password.';
                    }
                    // else if (err.code === 'auth/invalid-credential') {
                    //   msg = 'Please enter valid email and password.';
                    // }
                    setErrorMessage(msg);
                  } finally {
                    setLoading(false);
                  }
                }}
              />
            )}
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
    </KeyboardAvoidingView>
  );
};

export default SignIn;
