import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { BottomSheet, Button, Icon, useTheme } from 'react-native-elements';
import Aviso from '../../components/Aviso';

import InputMask from '../../components/InputMask';
import { styles } from './styles';

const AccountName: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const [name, setName] = useState<string>();
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

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Button 
          onPress={() => navigation.goBack()}
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
        <Text style={styles.wrapper_text}>Qual o seu nome completo?</Text>
      </View>
  
      <InputMask 
        type="custom"
        options={{
          mask: `${name ? name : '*'}`
        }}
        placeholder="Digite Aqui"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Button 
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

export default AccountName;