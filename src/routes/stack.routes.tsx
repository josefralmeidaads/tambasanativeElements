import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthRoutes from './tab.routes';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import CreateAccount from '../screens/CreateAccount';
import AcceptPolitics from '../screens/AcceptPolitics';

const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Main" component={AuthRoutes}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      <Stack.Screen name="CreateAccount" component={CreateAccount}/>
      <Stack.Screen name="AcceptPolitics" component={AcceptPolitics} />
    </Stack.Navigator>
  );
}

export default StackRoutes;