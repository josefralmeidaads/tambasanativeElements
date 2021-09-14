import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BottomSheet, Button, Icon, useTheme } from 'react-native-elements';
import Aviso from '../../components/Aviso';

import InputMask from '../../components/InputMask';
import { styles } from './styles';

const AccountCellPhone: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const [cell, setCell] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [visible, setVisible] = useState<boolean>(false);

  const handleGoBack = () => {
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

  const handleNavigateToAccountPassword = () => {
    navigation.navigate('AccountPassword')
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
        <Text style={styles.wrapper_text}>Qual o seu celular?</Text>
        <Text style={styles.wrapper_subtext}>
          Ele será usado como sua principal identificação{'\n'}
          na Tambasa Financeira
        </Text>
      </View>
  
      <InputMask 
        value={cell}
        onChangeText={(text) => setCell(text)}
        type="cel-phone"
        placeholder="Digite Aqui"
        options={{
          maskType: "BRL",
          dddMask: '(99)',
          withDDD: true,
        }}
      />

      <Button
        onPress={handleNavigateToAccountPassword}
        title="CONTINUAR"
        buttonStyle={styles.button_continue}
        titleStyle={styles.button_continue_text}
      />

      <BottomSheet isVisible={visible} containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.8)' }}>
        <Aviso
          title={title}
          onPress={(option: string) => SwitchOption(option)}
          warning={false}
        />
      </BottomSheet>
    </View>
  );
}

export default AccountCellPhone;