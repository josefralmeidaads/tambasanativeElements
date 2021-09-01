import React from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { styles } from './styles';

const CreateAccount: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button
        containerStyle={styles.header} 
        buttonStyle={styles.header}
        title="Voltar"
      />
      <Button
        buttonStyle={styles.button_option_one}
        containerStyle={styles.button_option_one}
        title="Teste 1"
      />
      <Button 
        buttonStyle={styles.button_option_two}
        containerStyle={styles.button_option_two}
        title="Teste 2"
      />

    </View>
  );
}

export default CreateAccount;