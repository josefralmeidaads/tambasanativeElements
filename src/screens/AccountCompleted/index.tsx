import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Icon, useTheme } from 'react-native-elements';

import { styles } from './styles';
import img_completed from '../../assets/register_success.png';

const AccountCompleted: React.FC = () => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Icon 
          type="font-awesome-5"
          name="chevron-left"
          containerStyle={styles.icon}
          color={theme.colors?.grey2}
        />
        <Text style={styles.wrapper_text}>
          Usuário, cadastro realizado com{'\n'} 
          sucesso!
          Seja bem-vindo ao aplicativo da{'\n'}
          TAMBASA Financeira!
        </Text>
        <Image 
          source={img_completed} 
          style={styles.wrapper_image}
          resizeMode="contain"
        />
      </View>

      <Button 
        title="ACESSAR"
        buttonStyle={styles.btn}
        titleStyle={styles.btn_text}
      />
    </View>
  );
}

export default AccountCompleted;