import React from 'react';
import { View } from 'react-native';
import { useTheme, Header as HeaderNE } from 'react-native-elements';
import ButtonMenu from './components/ButtonMenu';

import { styles } from './styles';

interface HeaderProps {
  onChangeMenu: () => void;
}

const Header: React.FC = ({ onChangeMenu }: HeaderProps) => {
  const { theme } = useTheme();

  const hiddenMenu = () => {
    onChangeMenu()
  }
  return (
    <View>
      <HeaderNE
        placement="left"
        leftComponent={<ButtonMenu onPress={hiddenMenu}/>}
        backgroundColor={theme.colors?.blue_500}
      />
    </View>
  );
}

export default Header;