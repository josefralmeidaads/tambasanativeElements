import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BottomSheet, Button, Icon, useTheme } from 'react-native-elements';
import Aviso from '../../components/Aviso';

import InputMask from '../../components/InputMask';
import { styles } from './styles';

const AccountCpf: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const [cpf, setCpf] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [visible, setVisible] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);

  const handleGoBack = () => {
    setWarning(false);
    setVisible(true);
    setTitle("Tem certeza de que deseja voltar? Você perderá os dados preenchidos." );
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

  const handleNavigateToAccountName = () => {
    if(!cpf){
      setTitle('CPF Inválido');
      setWarning(true);
      setVisible(true);
      return;
    }
    navigation.navigate('AccountName')
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Button 
          onPress={handleGoBack}
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
        type="cpf"
        placeholder="Digite Aqui"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <Button
        onPress={handleNavigateToAccountName}
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

export default AccountCpf;