import React from 'react';
import { View, TextInputProps, TextInput } from 'react-native';

import { styles } from './styles';

const InputWithoutMask: React.FC<TextInputProps> = ({ ...rest }: TextInputProps) => {
  return (
  <View style={styles.container}>  
    <TextInput 
      {...rest}
      style={styles.input_mask}
    />
  </View>
  );
}

export default InputWithoutMask;