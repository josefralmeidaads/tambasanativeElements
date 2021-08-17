import React from 'react';
import { View } from 'react-native';
import { Icon, Button, ButtonProps } from 'react-native-elements';

import { styles } from './styles';

interface BtnProps extends ButtonProps {
  subtitle?: string;
}

const BtnPrimario: React.FC<BtnProps> = ({ subtitle, title }: BtnProps) => {
  return (
    <View style={styles.container}>
      <Button 
        title={title}
        buttonStyle={styles.button}
      />
    </View>
  );
}

export default BtnPrimario;

BtnPrimario.defaultProps = {
  title: 'Button',
  subtitle: '',
}