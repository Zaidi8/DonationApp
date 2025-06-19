import React from "react";
import { TouchableOpacity, Text,  } from "react-native";
import useResponsiveScale from "./Scalling";
interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  const {horizontalScale, verticalScale, scaleFontSize} = useResponsiveScale();
  return (
    <TouchableOpacity 
    style={{
      backgroundColor:"#2563eb",
      padding:horizontalScale(12),
      marginVertical:verticalScale(10),
      marginHorizontal:horizontalScale(20),
      borderRadius:100
    }}
     onPress={onPress}>
        <Text 
        style={{fontSize:scaleFontSize(22) , fontFamily:"montserrat-bold", color:"white", textAlign:'center' }} 
        >{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
