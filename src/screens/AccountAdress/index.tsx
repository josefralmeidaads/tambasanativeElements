import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { BottomSheet, Button, Icon, useTheme } from 'react-native-elements';

import Aviso from '../../components/Aviso';
import BtnGoBack from '../../components/BtnGoBack';
import CheckAdress from '../../components/CheckAdress';
import { styles } from './styles';

export interface AdressProps {
  complement: string,
  road: string,
  number: string,
  neighboord: string,
  state: string,
  city: string,
  zipCode: string,
  add_complement: string,
}

const AccountAdress: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const [adress, setAdress] = useState<AdressProps>({} as AdressProps);
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

  const handleMoveToRazaoSocial = () => {
    setVisible(false);
    return navigation.goBack();
  }

  const SwitchOption = (value: string) => {
    const options = {
      FECHAR: () => handleCloseModal(),
      VOLTAR: () => handleMoveToRazaoSocial(),
    }

    return options[value](value);
  }

  const handleNavigateToRelationsManager = () => {
    navigation.navigate('AccountRelationsManager')
  }

  return (
    <View style={styles.container}>
      <BtnGoBack onPress={handleGoBack} />

      <CheckAdress onChangeText={(value: AdressProps) => setAdress(value)} adress={adress}/>

      <Button
        onPress={handleNavigateToRelationsManager} 
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

export default AccountAdress;