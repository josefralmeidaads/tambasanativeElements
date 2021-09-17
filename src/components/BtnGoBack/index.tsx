import React from 'react';
import { View } from 'react-native';
import { Button, ButtonProps, Icon } from 'react-native-elements';

import { styles } from './styles';

const BtnGoBack: React.FC<ButtonProps> = ({ ...rest }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <Button 
        icon={
          <Icon 
            type="font-awesome-5"
            name="chevron-left"
            color="#777"
            style={styles.icon}
          />
        }
        buttonStyle={styles.button_back}
        containerStyle={styles.button_back}
        {...rest}
      />
    </View>
  );
}

export default BtnGoBack;