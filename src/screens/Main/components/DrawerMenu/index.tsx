import React from 'react';
import { View } from 'react-native';
import { ListItem, Icon, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerMenu: React.FC = () => {
  const navigation = useNavigation();
  const list = [
    {
      title: 'Logout',
      icon: 'sign-out-alt',
      type: 'font-awesome-5',
    },
  ]

  const logout = async() => {
    await AsyncStorage.removeItem('@user:');
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
    {
      list.map((item, i) => (
      <ListItem key={i} containerStyle={styles.list_item}>
        <ListItem.Content>
          <Button
            onPress={logout}
            buttonStyle={styles.button} 
            title="Logout"
            icon={
              <Icon 
                name={item.icon}
                type={item.type}
                style={styles.icon_button}
                color="#FFF"
              />
            }
            iconPosition="left"
          />
        </ListItem.Content>
      </ListItem>
    ))
  }
    </View>
  );
}

export default DrawerMenu;