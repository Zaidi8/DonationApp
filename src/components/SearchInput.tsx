import React, {useRef, useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import useResponsiveScale from './Scalling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
interface SearchInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onChangeText,
}) => {
  const {scaleFontSize, verticalScale, horizontalScale} = useResponsiveScale();
  const textInputRef = useRef<TextInput>(null);
  const [search, setSearch] = useState('');

  const handlePress = () => {
    textInputRef.current?.focus();
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    onChangeText(text);
  };
  return (
    <Pressable
      onPress={handlePress}
      style={{
        backgroundColor: '#f3f5f9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: horizontalScale(20),
        marginVertical: verticalScale(10),
        paddingHorizontal: horizontalScale(22),
        paddingVertical: verticalScale(14),
        borderRadius: 20,
      }}>
      <FontAwesomeIcon
        icon={faSearch}
        size={scaleFontSize(24)}
        color="#25c0ff"
      />
      <TextInput
        ref={textInputRef}
        placeholder={placeholder}
        onChangeText={handleSearch}
        value={search}
        style={{
          fontFamily: 'Montserrat-Regular',
          fontSize: scaleFontSize(16),
          height: '100%',
          width: '90%',
          marginLeft: horizontalScale(10),
        }}
      />
    </Pressable>
  );
};
export default SearchInput;
