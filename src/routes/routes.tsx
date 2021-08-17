import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from '../screens/Main';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './stack.routes';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
  <NavigationContainer>  
    <StackRoutes />
  </NavigationContainer>
  );
}

export default Routes;