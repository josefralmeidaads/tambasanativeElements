import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

import { styles } from './styles';

interface BtnProps extends RectButtonProps {
  title: string;
  subtitle: string;
  icon: string;
  type_icon: string;
  color_icon: string;
  size_icon: number;
}

const BtnOferta: React.FC<BtnProps> = ({ title, subtitle, icon, type_icon, color_icon, size_icon }: BtnProps) => {
  return (
    <View style={styles.container}>
     <RectButton style={styles.button}>
       <Icon 
        type={type_icon} 
        name={icon}
        color={color_icon}
        size={size_icon}
       />
       <View style={styles.button_view}>
        <Text style={styles.button_subtitle_text}>
          {subtitle}
        </Text>
        <Text style={styles.button_title_text}>
          {title}
        </Text>
       </View>
     </RectButton>
    </View>
  );
}

export default BtnOferta;

BtnOferta.defaultProps = {
  title: "Button",
  subtitle: "Subtitle",
  icon: "",
  type_icon: "",
  color_icon: "white",
  size_icon: 30,
}
