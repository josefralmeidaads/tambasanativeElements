import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon, ButtonProps } from 'react-native-elements';

import { styles } from './styles';

const ButtonMenu: React.FC<ButtonProps> = ({ ...rest }: ButtonProps) => {
  const [userToken, setUserToken] = useState({});
  useEffect(() => {
    const loadUser = async() => {
      const data = await AsyncStorage.getItem('@user:');
      if(data){
        setUserToken(JSON.parse(data));
      }
    }
    loadUser();
  }, [])
  return (
  <View style={styles.container}>  
    <Button 
      icon={
        <Icon 
          type="font-awesome-5"
          name="list"
          size={15}
          color="#FFF"
        />
      }
      iconPosition="left"
      type="clear"
      {...rest}
    />
    <Text style={styles.container_text}>
      {userToken?.userToken?.name}
    </Text>
  </View>
  );
}

export default ButtonMenu;