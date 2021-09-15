import React, { useState } from 'react';
import { Alert, Image, ImageBackground, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, BottomSheet } from 'react-native-elements';
import { Link } from '@react-navigation/native';

import logo from '../../assets/logo.png';
import fundo from '../../assets/login_bkg.png';
import Inputs from '../../components/Inputs';
import api from '../../services/api';
import { styles } from './styles';
import Aviso from '../../components/Aviso';
import Loading from '../../components/Loading';

const Login: React.FC = ({ navigation }: any) => {
  const [password, setPassword] = useState<string | undefined>();
  const [email, setEmail] = useState<string>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();

  const login = async() => {
    
    try{
      if(!email){
        setTitle("Endereço de e-mail inválido.");
        setIsVisible(true);
        return;
      } else if (!password || password.length < 6){
        setTitle("A senha deve ter pelo menos 6 caracteres.");
        setIsVisible(true);
        return;
      }
      setIsLoading(true);
      const response = await api.post('/entrar', {
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      await AsyncStorage.setItem('@user:', JSON.stringify(response.data));
      navigation.navigate('Main');
      setIsLoading(false);
    }catch(err: any){
      if(err.response.status === 403 && err.response.data === 'auth_fail_wrong_password'){
        Alert.alert('Erro!', 'A senha digitada não confere com a cadastrada para este e-mail.');
      } else {
        Alert.alert('Error', err.response.data);
      }
      setIsLoading(false);
    }
  }

  const createAccount = () => {
    navigation.navigate('CreateAccount');
  }

  return (
  <View style={styles.container}>
    <Loading isLoading={isLoading}/>
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
    <BottomSheet isVisible={isVisible} containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.8)' }}>
    <Aviso 
      title={title}
      onPress={() => setIsVisible(false)}
      warning={true}
    />
  </BottomSheet>
  </View>
  );
}

export default Login;