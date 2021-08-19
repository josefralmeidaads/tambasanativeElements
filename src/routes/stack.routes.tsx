import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthRoutes from './tab.routes';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Main" component={AuthRoutes}/>
    </Stack.Navigator>
  );
}

export default StackRoutes;