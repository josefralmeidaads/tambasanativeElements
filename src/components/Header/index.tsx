import React from 'react';
import { View } from 'react-native';
import { useTheme, Header as HeaderNE } from 'react-native-elements';

const Header: React.FC = () => {
  const { theme } = useTheme();
  return (
    <View>
      <HeaderNE
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Olá, José Francisco', style: { color: '#fff' } }}
        backgroundColor={theme.colors?.blue_500}
      />
    </View>
  );
}

export default Header;