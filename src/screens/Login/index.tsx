import React, { useState } from 'react';
import { Alert, Image, ImageBackground, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-elements';
import { Link, useNavigation } from '@react-navigation/native';

import logo from '../../assets/logo.png';
import fundo from '../../assets/login_bkg.png';
import Inputs from '../../components/Inputs';
import api from '../../services/api';
import { styles } from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const login = async() => {
    try{
      if(!email || !password){
        return Alert.alert('Favor preencher os campos de email e senha!')
      }
      const response = await api.post('session', {
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      await AsyncStorage.setItem('@user:', JSON.stringify(response.data));
      navigation.navigate('Main');
    }catch(err){
      Alert.alert(err.message);
    }
  }

  const createAccount = () => {
    navigation.navigate('CreateAccount');
  }

  return (
  <View style={styles.container}>
    <ImageBackground 
      source={fundo} 
      style={styles.container}
    >  
    <View style={styles.content}>
      <Image 
        source={logo} 
        style={{ width: 150, height: 150 }} 
        resizeMode="center"
      />
      <Inputs 
        placeholder="E-mail"
        value={email}
        onChangeText={(value) => setEmail(value)} 
      />
      <Inputs 
        placeholder="Senha"
        value={password}
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}  
      />
      <Link
        to={'/ForgotPassword'} 
        style={styles.content_text}
      >
        Esqueci minha senha
      </Link>

      <Button 
        title="ENTRAR"
        onPress={login}
        buttonStyle={styles.btn_content}
        titleStyle={styles.btn_content_text}
      />
    </View>
    <View style={styles.footer}>
      <Button 
        title="CADASTRAR"
        onPress={createAccount} 
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
    </ImageBackground>
  </View>
  );
}

export default Login;