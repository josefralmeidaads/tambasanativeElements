import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { useTheme } from 'react-native-elements';

import { styles } from './styles';

const Inputs: React.FC<TextInputProps> = ({ ...rest}: TextInputProps) => {
  const { theme } = useTheme();
  return (
  <View style={styles.container}>  
    <TextInput 
      style={styles.input_style}
      {...rest}
      placeholderTextColor={theme.colors?.gray_100}
    />
  </View>
  );
}

export default Inputs;