import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import logo from '../../assets/login/tambasa_logo.png';
import Inputs from '../../components/Inputs';
import { styles } from './styles';

const Login: React.FC = () => {
  return (
  <View style={styles.container}>  
    <View style={styles.content}>
      <Image source={logo}/>
      <Inputs placeholder="E-mail"/>
      <Inputs placeholder="Senha"/>
      <Text style={styles.content_text}>
        Esqueci minha senha
      </Text>

      <Button 
        title="ENTRAR"
        buttonStyle={styles.btn_content}
        titleStyle={styles.btn_content_text}
      />
    </View>
    <View style={styles.footer}>
      <Button 
        title="CADASTRAR" 
        titleStyle={styles.btn_footer_text} 
        buttonStyle={styles.btn_footer}
        containerStyle={{
          elevation: 5
        }}
        type="outline"
      />
      <Text style={styles.footer_text}>
        Soluções que cabem no seu bolso
      </Text>
    </View>
  </View>
  );
}

export default Login;