import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Button, Icon, useTheme, CheckBox, BottomSheet } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import Aviso from '../../components/Aviso';

const AcceptPolitics: React.FC = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [checkedTerms, setCheckedTerms] = useState<boolean>(false);
  const [checkedPolitics, setCheckedPolitics] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleGoBack = () => {
    setIsVisible(true)
    return;
  }

  const handleSwitchOption = (option: string) => {
    if(option === 'FECHAR'){
      setIsVisible(false)
      return
    } else if (option === 'PROSSEGUIR') {
      navigation.goBack()
    }
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
        title="CONTINUAR"
        buttonStyle={styles.btn_continue}
        titleStyle={styles.btn_continue_text}
      />
      
      <BottomSheet isVisible={isVisible} containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.8)' }}>
        <Aviso
          title="Tem certeza de que deseja voltar? Você perderá os dados preenchidos." 
          onPress={(option) => handleSwitchOption(option)}
          warning={false}
        />
      </BottomSheet>
    </View>
  );
}

export default AcceptPolitics;