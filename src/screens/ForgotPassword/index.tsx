import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { Icon, useTheme, Button } from 'react-native-elements';
import { Link } from '@react-navigation/native';

import { styles } from './styles';
import bkg from '../../assets/login_bkg.png';
import logo from '../../assets/logo.png';
import Inputs from '../../components/Inputs';

const ForgotPassword: React.FC = () => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={bkg} 
        style={styles.container}
      >
        <View style={styles.header}>
          <Icon 
            name="chevron-left" 
            type="font-awesome-5"
          />
          <Link 
            to={"/Login"} 
            style={styles.header_text}
          >
            Recuperar Senha
          </Link>
        </View>

        <View style={styles.logo_content}>
          <Image 
            source={logo} 
            style={styles.logo}
          />
          <Text 
            style={{
              color: theme.colors?.grey2,
              paddingVertical: 20,
            }}
          >
            Informe o seu e-mail
          </Text>

          <Inputs 
            placeholder="E-mail"
          />

          <Button 
            title="Enviar" 
            buttonStyle={styles.button}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default ForgotPassword;