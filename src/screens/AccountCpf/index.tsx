import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon, useTheme } from 'react-native-elements';

import InputMask from '../../components/InputMask';
import { styles } from './styles';

const AccountCpf: React.FC = () => {
  const { theme } = useTheme();
  const [cpf, setCpf] = useState<string>();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Button 
          icon={
            <Icon 
              type="font-awesome-5"
              name="chevron-left"
              color={theme.colors?.grey2}
              style={styles.icon}
              containerStyle={styles.icon}
            />
          }
          type="clear"
          buttonStyle={styles.button_back}
        />
        <Text style={styles.wrapper_text}>Qual o seu CPF?</Text>
      </View>
  
      <InputMask 
        type="cel-phone"
        placeholder="Digite Aqui"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />
      
    </View>
  );
}

export default AccountCpf;