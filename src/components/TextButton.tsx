import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Header from './Header';

interface TextButttonProps {
  title: string;
  onPress: () => void;
}

const TextButton: React.FC<TextButttonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Header color={'#156cf7'} title={title} type={1} />
    </TouchableOpacity>
  );
};

export default TextButton;
