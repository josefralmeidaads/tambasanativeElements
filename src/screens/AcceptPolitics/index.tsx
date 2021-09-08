import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Button, Icon, useTheme, CheckBox, BottomSheet } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import Aviso from '../../components/Aviso';

const AcceptPolitics: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const [checkedTerms, setCheckedTerms] = useState<boolean>(false);
  const [checkedPolitics, setCheckedPolitics] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();

  const handleGoBack = () => {
    setWarning(false);
    setIsVisible(true);
    setTitle("Tem certeza de que deseja voltar? Você perderá os dados preenchidos." );
    return;
  }

  const handleClose = () => {
    return setIsVisible(false);
  }

  const handleBackDisplay = () => {
    setIsVisible(false);
    return navigation.goBack();
  }

  const SwitchOption = (value: string) => {
    const Options = {
      FECHAR: handleClose,
      VOLTAR: handleBackDisplay
    }

    return Options[value](value);
  }

  const handleNavigateToCpf = () => {
    setWarning(true);
    setIsVisible(true);

    if(!checkedTerms){
      setTitle(`Você deve estar de acordo com ${'\n'} os nossos Termos de Uso.`)
      return;
    } else if (!checkedPolitics){
      setTitle(`Você deve estar de acordo ${'\n'} com nossa Política de Privacidade.`)
      return;
    }
    setIsVisible(false);
    navigation.navigate('AccountCpf');
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Button 
          onPress={handleGoBack}
          type="clear"
          buttonStyle={styles.btn_back}
          containerStyle={styles.btn_back}
          icon={
            <Icon 
              type="font-awesome-5"
              name="chevron-left"
              color={theme.colors?.grey2}
            />
          }
        />
        <Text style={styles.wrapper_text}>
          Está de acordo com os {'\n'}Termos de Uso e Política de Privacidade?
        </Text>

        <CheckBox 
          checked={checkedTerms}
          onPress={() => setCheckedTerms(!checkedTerms)}
          checkedIcon="check-square"
          checkedColor={theme.colors?.blue_500}
          containerStyle={styles.check_box}
          title="Li e estou de acordo com os Termos de Uso."
        />

        <CheckBox 
          checked={checkedPolitics}
          onPress={() => setCheckedPolitics(!checkedPolitics)}
          checkedIcon="check-square"
          checkedColor={theme.colors?.blue_500}
          containerStyle={styles.check_box}
          title={`Li e estou de acordo com a Política de Privacidade.`}
        />
      </View>
      <Button
        onPress={handleNavigateToCpf} 
        title="CONTINUAR"
        buttonStyle={styles.btn_continue}
        titleStyle={styles.btn_continue_text}
      />
      
      <BottomSheet isVisible={isVisible} containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.8)' }}>
        <Aviso
          title={title}
          onPress={(option: string) => SwitchOption(option)}
          warning={warning}
        />
      </BottomSheet>
    </View>
  );
}

export default AcceptPolitics;