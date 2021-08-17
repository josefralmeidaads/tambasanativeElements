import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../screens/Main';
import { useTheme } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/Icon';
import { Text } from 'react-native';

const AppTab = createBottomTabNavigator()

const AuthRoutes: React.FC = () => {
  const { theme } = useTheme();
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors?.white,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors?.blue_500,
          height: 70,
        },
      }}
    >
      <AppTab.Screen 
        name="Principal" 
        component={Main}
        options={{
          tabBarIconStyle: {
            marginBottom: -20
          },
          tabBarLabelStyle: {
            marginVertical: 7
          },
          tabBarLabel: 'Extrato',
          tabBarIcon: (({color, size}) => (
            <Icon type="font-awesome-5" color={color} size={size} name="wallet"/>
          ))
        }}
      />
      <AppTab.Screen 
        name="Pagar" 
        component={Main}
        options={{
          tabBarIconStyle: {
            marginBottom: -20
          },
          tabBarLabelStyle: {
            marginVertical: 7
          },
          tabBarLabel: 'Pagar',
          tabBarIcon: (({color, size}) => (
            <Icon type="font-awesome-5" color={color} size={size} name="barcode"/>
          ))
        }}
      />
      <AppTab.Screen 
        name="Cobrar" 
        component={Main}
        options={{
          tabBarIconStyle: {
            marginBottom: -20
          },
          tabBarLabelStyle: {
            marginVertical: 7
          },
          tabBarLabel: 'Cobrar',
          tabBarIcon: (({color, size}) => (
            <Icon type="font-awesome-5" color={color} size={size} name="comment-dollar"/>
          ))
        }}
      />
      <AppTab.Screen 
        name="Transferir" 
        component={Main}
        options={{
          tabBarIconStyle: {
            marginBottom: -20
          },
          tabBarLabelStyle: {
            marginVertical: 7
          },
          tabBarLabel: 'Transferir',
          tabBarIcon: (({color, size}) => (
            <Icon type="font-awesome-5" color={color} size={size} name="exchange-alt"/>
          ))
        }}
      />
      <AppTab.Screen 
        name="Ajuda" 
        component={Main}
        options={{
          tabBarIconStyle: {
            marginBottom: -20
          },
          tabBarLabelStyle: {
            marginVertical: 7
          },
          tabBarLabel: 'Ajuda',
          tabBarIcon: (({color, size}) => (
            <Icon type="font-awesome-5" color={color} size={size} name="phone"/>
          ))
        }}
      />
    </AppTab.Navigator>
  );
}

export default AuthRoutes;