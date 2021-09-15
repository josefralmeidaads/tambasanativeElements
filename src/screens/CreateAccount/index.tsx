import React from 'react';
import { View } from 'react-native';
import { Button, Icon, useTheme  } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

const CreateAccount: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const handleNavigateAcceptPolitics = (params: string) => {
    navigation.navigate('AcceptPolitics', { display: params });
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.goBack()}
        containerStyle={styles.header} 
        buttonStyle={styles.header}
        titleStyle={styles.header_text}
        icon={
          <Icon 
            type="font-awesome-5"
            name="chevron-left"
            color={theme.colors?.grey2}
          />
        }
      />
      <Button
        onPress={() => handleNavigateAcceptPolitics('AccountCpf')}
        buttonStyle={styles.button_option_one}
        containerStyle={styles.button_option_one}
        titleStyle={styles.button_option_one_text}
        title="Pessoa Física"
        iconPosition="left"
        icon={
          <Icon 
            type="font-awesome-5"
            name="user"
            solid={true}
            color={theme.colors?.blue_500}
            style={styles.icon}
          />
        }
      />
      <Button
        onPress={() => handleNavigateAcceptPolitics('AccountCnpj')} 
        buttonStyle={styles.button_option_two}
        containerStyle={styles.button_option_two}
        titleStyle={styles.button_option_two_text}
        title="Pessoa Jurídica"
        iconPosition="left"
        icon={
          <Icon 
            type="font-awesome-5"
            name="university"
            solid={true}
            color={theme.colors?.blue_500}
            style={styles.icon}
          />
        }
      />

    </View>
  );
}

export default CreateAccount;