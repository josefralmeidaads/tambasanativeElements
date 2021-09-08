import React from 'react';
import { View, TextInputProps } from 'react-native';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

import { styles } from './styles';


const InputMask: React.FC<TextInputMaskProps> = ({ ...rest }: TextInputMaskProps) => {
  return (
  <View style={styles.container}>  
    <TextInputMask 
      {...rest}
      style={styles.input_mask}
    />
  </View>
  );
}

export default InputMask;