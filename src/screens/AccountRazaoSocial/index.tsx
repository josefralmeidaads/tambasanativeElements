import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { BottomSheet, Button, Icon, useTheme } from 'react-native-elements';
import Aviso from '../../components/Aviso';
import BtnGoBack from '../../components/BtnGoBack';
import InputWithoutMask from '../../components/InputWithoutMask ';


import { styles } from './styles';

const AccountRazaoSocial: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const [razaoSocial, setRazaoSocial] = useState<string>();
  const [visible, setVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();

  const handleGoBack = () => {
    setVisible(true);
    setTitle("Tem certeza de que deseja voltar? Você perderá os dados preenchidos." );
    return;
  }

  const handleClose = () => {
    return setVisible(false);
  }

  const handleBackDisplay = () => {
    setVisible(false);
    return navigation.goBack();
  }

  const switchOption = (value: string) => {
    const options = {
      FECHAR: handleClose,
      VOLTAR: handleBackDisplay
    }

    return options[value](value);
  }

  const handleNavigateToAccountAdress = () => {
    navigation.navigate('AccountAdress');
  }

  return (
    <View style={styles.container}>
      <BtnGoBack onPress={handleGoBack} />
      <View style={styles.wrapper}>
        <Text style={styles.wrapper_text}>Qual a sua Razão Social?</Text>
      </View>
      
      <View style={{ flex: 1 }}>
        <InputWithoutMask
          placeholder="Digite Aqui"
          value={razaoSocial}
          onChangeText={(text) => setRazaoSocial(text)}
        />
      </View>

      <Button 
        onPress={handleNavigateToAccountAdress}
        title="CONTINUAR"
        buttonStyle={styles.button_continue}
        titleStyle={styles.button_continue_text}
      />

      <BottomSheet isVisible={visible} containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.8)' }}>
        <Aviso
          title={title}
          onPress={(option: string) => switchOption(option)}
          warning={false}
        />
      </BottomSheet>
    </View>
  );
}

export default AccountRazaoSocial;