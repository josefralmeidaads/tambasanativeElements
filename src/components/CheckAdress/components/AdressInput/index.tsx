import React from 'react';
import { Text, TextInput, View, TextInputProps } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { styles } from './styles';

interface AdressProps extends TextInputProps {
  title: string;
  withMask?: boolean;
}

const AdressInput: React.FC<AdressProps> = ({ placeholder ,title, withMask,...rest }: AdressProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.adress_title}>
        {title}
      </Text>
      {!withMask ? <TextInput
        style={styles.adress_input} 
        placeholder={placeholder}
        {...rest}
      /> :
      <TextInputMask
        type="zip-code"
        style={styles.adress_input} 
        placeholder={placeholder}
        {...rest}
      />}
    </View>
  );
}

export default AdressInput;