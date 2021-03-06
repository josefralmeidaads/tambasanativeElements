import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Button, Icon, useTheme, CheckBox, BottomSheet } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';
import Aviso from '../../components/Aviso';
import BtnGoBack from '../../components/BtnGoBack';

interface RouterProps {
  display: string;
}

const AcceptPolitics: React.FC = ({ navigation }: any) => {
  const { theme } = useTheme();
  const router = useRoute();
  const [checkedTerms, setCheckedTerms] = useState<boolean>(false);
  const [checkedPolitics, setCheckedPolitics] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const { display }:RouterProps = router.params;

  const handleGoBack = () => {
    setWarning(false);
    setIsVisible(true);
    setTitle("Tem certeza de que deseja voltar? Você perderá os dados preenchidos.");
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

  const handleNavigateToDisplay = () => {
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
    navigation.navigate(display);
  }

  return (
    <View style={styles.container}>
      <BtnGoBack onPress={handleGoBack} />
      <View style={styles.wrapper}>
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
        onPress={handleNavigateToDisplay} 
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