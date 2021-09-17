import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BottomSheet, Button, Icon, useTheme } from 'react-native-elements';

import Aviso from '../../components/Aviso';
import BtnGoBack from '../../components/BtnGoBack';
import InputWithoutMask from '../../components/InputWithoutMask ';
import PasswordRequirements from './components/PasswordRequirements';

import { styles } from './styles';

const AccountPassword: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const [password, setPassword] = useState<string>();
  const [validateInput, setValidateInput] = useState({
    upperCase: false,
    lowerCase: false,
    number: false,
    lenght: false,
    confirmPassword: false,
  });
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [visible, setVisible] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);

  const secureText = (text: string) => {
    const regexUpperCase = RegExp(/^(?=.*[A-Z]).+$/);
    const regexLowerCase = RegExp(/^(?=.*[a-z]).+$/);
    const regexNumber = RegExp(/^(?=.*[0-9]).+$/);
    const length = text.length >= 6;
    const testPassword = text === confirmPassword
    
    setValidateInput({
      upperCase: regexUpperCase.test(text),
      lowerCase: regexLowerCase.test(text),
      number: regexNumber.test(text),
      lenght: length,
      confirmPassword: testPassword,
    })
  }

  const validatePassword = (text: string) => {
    const testPassword = text === password;

    setValidateInput({
      ...validateInput,
      confirmPassword: testPassword
    })
  }

  const handleGoBack = () => {
    setWarning(false);
    setVisible(true);
    setTitle("Tem certeza de que deseja voltar? Você perderá os dados preenchidos." );
    setPassword('')
    setConfirmPassword('')
    return;
  }

  const handleCloseModal = () => {
    return setVisible(false)
  }

  const handleMoveToAcceptPolitics = () => {
    setVisible(false);
    return navigation.goBack();
  }

  const SwitchOption = (value: string) => {
    const options = {
      FECHAR: () => handleCloseModal(),
      VOLTAR: () => handleMoveToAcceptPolitics(),
    }

    return options[value](value);
  }

  const handleNavigateToCompleteAccount = () => {
    if(validateInput.lenght && validateInput.upperCase && validateInput.lowerCase && validateInput.number && validateInput.confirmPassword){
      navigation.navigate('AccountCompleted')
    }else {
      setWarning(true);
      setTitle('Preencha a senha de acordo com os requisitos.');
      setVisible(true);
      return;
    }
  }

  return (
    <View style={styles.container}>
      <BtnGoBack onPress={handleGoBack} />
      <View style={styles.wrapper}>
        <Text style={styles.wrapper_text}>Hora de cadastrar uma senha</Text>
        <Text style={styles.wrapper_subtext}>
          Ela é a sua chave de acesso e deve seguir os {'\n'}
          requisitos abaixo:
        </Text>
        
        <View style={{ paddingVertical: 10 }}>
          <PasswordRequirements rule={validateInput.lenght} title="Mínimo 6 caracteres"/>
          <PasswordRequirements rule={validateInput.upperCase} title="Letra maiúscula"/>
          <PasswordRequirements rule={validateInput.lowerCase} title="Letra minúscula"/>
          <PasswordRequirements rule={validateInput.number} title="Número"/>
          <PasswordRequirements rule={validateInput.confirmPassword} title="Repetir Senha"/>
        </View>
      </View>
  
      <View style={{flex: 1}}>
        <InputWithoutMask 
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text)
            secureText(text)
          }}
          placeholder="Senha"
        />
        
        <InputWithoutMask 
          value={confirmPassword}
          secureTextEntry={true}
          onChangeText={(text) => {
            setConfirmPassword(text)
            validatePassword(text)
          }}
          placeholder="Confirme sua senha"
        />
      </View>

      <Button
        onPress={handleNavigateToCompleteAccount}
        title="CONTINUAR"
        buttonStyle={styles.button_continue}
        titleStyle={styles.button_continue_text}
      />

      <BottomSheet isVisible={visible} containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.8)' }}>
        <Aviso
          title={title}
          onPress={(option: string) => SwitchOption(option)}
          warning={warning}
        />
      </BottomSheet>
    </View>
  );
}

export default AccountPassword;