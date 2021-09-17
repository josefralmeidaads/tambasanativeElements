import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import BtnGoBack from '../../components/BtnGoBack';

import { styles } from './styles';

const AccountRelationsManager: React.FC = ({ navigation }: any) => {
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
  return (
    <View style={styles.container}>
      <BtnGoBack onPress={handleGoBack}/>
    </View>
  );
}

export default AccountRelationsManager;