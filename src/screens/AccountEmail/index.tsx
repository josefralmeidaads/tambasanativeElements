import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { BottomSheet, Button, Icon, useTheme } from 'react-native-elements';
import Aviso from '../../components/Aviso';
import InputWithoutMask from '../../components/InputWithoutMask ';


import { styles } from './styles';

const AccountEmail: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const [email, setEmail] = useState<string>();
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

  const handleNavigateToAccountCellPhone = () => {
    navigation.navigate('AccountCellPhone')
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
        <Text style={styles.wrapper_text}>Qual o seu email?</Text>
        <Text style={styles.wrapper_subtext}>
          Ele será usado como sua principal identificação{'\n'}
          na Tambasa Financeira
        </Text>
      </View>
  
      <InputWithoutMask 
        keyboardType="email-address"
        placeholder="Digite Aqui"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Button
        onPress={handleNavigateToAccountCellPhone} 
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

export default AccountEmail;