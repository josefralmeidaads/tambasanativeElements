import React from 'react';
import { Image, Text, View } from 'react-native';
import { Icon, Button, useTheme } from 'react-native-elements';

import { styles } from './styles';
import ic_warning from '../../assets/ic_warning.png';

interface AvisoProps {
  title: string | undefined;
  onPress: (option?: any) => void;
  warning: boolean;
}

const Aviso: React.FC<AvisoProps> = ({ title, warning, onPress }: AvisoProps) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {warning && <Button
          onPress={() => onPress('FECHAR')}
          buttonStyle={styles.icon}
          type="clear"
          icon={
            <Icon 
              type="font-awesome-5"
              name="times"
              color={theme.colors?.grey2}
            />
          }
        />}
        <Image source={ic_warning} style={styles.container_image}/>
        <Text style={styles.container_text}>
          {title}
        </Text>
      </View>
      {warning && <Button 
        onPress={() => onPress('FECHAR')}
        title="Fechar" 
        buttonStyle={styles.close_button}
      />}
      {!warning && <View style={styles.container_warning_button}>
        <Button
          onPress={() => onPress('FECHAR')}
          containerStyle={styles.warning_button}
          buttonStyle={styles.warnin_button_no}
          titleStyle={styles.warnin_button_no_text} 
          title="NÃO"
        />
        <Button
          onPress={() => onPress('VOLTAR')}
          containerStyle={styles.warning_button}
          buttonStyle={styles.warnin_button_yes}
          titleStyle={styles.warnin_button_yes_text}  
          title="SIM"
        />
      </View>}
    </View>
  );
}

Aviso.defaultProps = {
  warning: true,
  title: 'Informe seu título'
}

export default Aviso;