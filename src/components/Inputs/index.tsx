import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import { styles } from './styles';

const Inputs: React.FC<TextInputProps> = ({ ...rest}: TextInputProps) => {
  return (
  <View style={styles.container}>  
    <TextInput 
      style={styles.input_style}
      {...rest}
    />
  </View>
  );
}

export default Inputs;