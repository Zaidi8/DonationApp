import React, {forwardRef, useState} from 'react';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useResponsiveScale from '../Scalling';

interface CredInputProps {
  lable: string;
  placeholdder?: string;
  secureTextEntry: boolean;
  keyboardType: KeyboardTypeOptions;
  returnKeyType: ReturnKeyTypeOptions;
  autoFocus?: boolean;
  onSubmitEditing: () => void;
  onTextChange: (val: string) => void;
}
const CredInput = forwardRef<TextInput, CredInputProps>(
  (
    {
      lable,
      placeholdder,
      secureTextEntry = false,
      keyboardType,
      returnKeyType,
      autoFocus,
      onSubmitEditing,
      onTextChange,
    },
    ref,
  ) => {
    const [PasswordVisible, setPasswordVisible] = useState(secureTextEntry);
    const [value, setValue] = useState('');
    const {horizontalScale, verticalScale, scaleFontSize} =
      useResponsiveScale();
    return (
      <View>
        <Text
          style={{
            fontFamily: 'Inter-Medium',
            color: '#36455A',
            lineHeight: scaleFontSize(14),
            fontSize: scaleFontSize(14),
          }}>
          {lable}
        </Text>
        <View
          style={{
            paddingVertical: verticalScale(12),
            borderBottomWidth: 1,
            borderBlockColor: 'rgba(167,167,167,0.5)',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            ref={ref}
            className="flex-1 justify-center "
            placeholder={placeholdder}
            placeholderTextColor={'#9b9b9b'}
            secureTextEntry={PasswordVisible}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            autoFocus={autoFocus}
            value={value}
            onChangeText={val => {
              setValue(val);
              onTextChange(val);
            }}
            onSubmitEditing={onSubmitEditing}
          />
          {secureTextEntry && (
            <TouchableOpacity
              onPress={() => setPasswordVisible(!PasswordVisible)}
              className="mr-3">
              <Icon
                name={PasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color={'#434343'}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  },
);
export default CredInput;
