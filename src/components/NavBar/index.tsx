import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Icon, useTheme, Button} from 'react-native-elements';
import { styles } from './styles';

const NavBar: React.FC = () => {
  const { theme } = useTheme();
  const [hide, setHide] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={styles.saldo}>
        <Text style={styles.saldo_text}>Saldo da carteira</Text>
        <TextInput 
          style={styles.saldo_text_valor}
          editable={false}
          secureTextEntry={hide ? true : false}
        >
          {hide ? '******' : 'R$ 0,00'}
        </TextInput>
      </View>

      <View style={styles.actions}>
        <Icon 
          type="font-awesome-5" 
          name={hide ? 'eye' : 'eye-slash'}
          solid={hide ? false : true}
          color={theme.colors?.white}
          onPress={() => setHide(!hide)}
        />
        <Button 
          title="Extrato"
          buttonStyle={styles.btnExtrato}
        />
      </View>
    </View>
    
  );
}

export default NavBar;