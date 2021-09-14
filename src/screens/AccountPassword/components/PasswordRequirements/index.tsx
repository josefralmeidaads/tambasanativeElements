import React, { useState } from 'react';
import { Text, TextInputProps, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { styles } from './styles';

interface PasswordRequirementsProps {
  title: string;
  rule: boolean;
}

const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({ title, rule }: PasswordRequirementsProps) => {

  return (
    <View style={styles.container}>
      <Icon 
        type="font-awesome-5"
        name={rule ? 'check' : 'times'}
        color={rule ? 'green' : 'red'}
        size={rule ? 10 : 14}
      />
      <Text
        style={rule ? styles.password_text_checked : styles.password_text_not_checked} 
      >
        {title}
      </Text>
    </View>
  );
}

export default PasswordRequirements;