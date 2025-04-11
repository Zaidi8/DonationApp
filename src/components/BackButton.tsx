import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from 'expo-router';
import useResponsiveScale from './Scalling';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const BackButton: React.FC = () => {
  const navigation = useNavigation();
  const {verticalScale, horizontalScale, scaleFontSize} = useResponsiveScale();
  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={{
        marginLeft: horizontalScale(20),
        marginTop: verticalScale(7),
        borderRadius: 100,
        padding: horizontalScale(12),
        backgroundColor: '#dfebf6',
        alignSelf: 'flex-start',
      }}>
      <FontAwesomeIcon icon={faArrowLeft} size={scaleFontSize(26)} />
    </TouchableOpacity>
  );
};

export default BackButton;
