import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthRoutes from './tab.routes';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import CreateAccount from '../screens/CreateAccount';
import AcceptPolitics from '../screens/AcceptPolitics';
import AccountCpf from '../screens/AccountCpf';
import AccountName from '../screens/AccountName';
import AccountEmail from '../screens/AccountEmail';
import AccountCellPhone from '../screens/AccountCellPhone';
import AccountPassword from '../screens/AccountPassword';
import AccountCompleted from '../screens/AccountCompleted';
import AccountCnpj from '../screens/AccountCnpj';
import AccountRazaoSocial from '../screens/AccountRazaoSocial';
import AccountAdress from '../screens/AccountAdress';
import AccountRelationsManager from '../screens/AccountRelationsManager';

const Stack = createNativeStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Main" component={AuthRoutes}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      <Stack.Screen name="CreateAccount" component={CreateAccount}/>
      <Stack.Screen name="AcceptPolitics" component={AcceptPolitics} />
      <Stack.Screen name="AccountCpf" component={AccountCpf} />
      <Stack.Screen name="AccountCnpj" component={AccountCnpj} />
      <Stack.Screen name="AccountName" component={AccountName} />
      <Stack.Screen name="AccountEmail" component={AccountEmail} />
      <Stack.Screen name="AccountCellPhone" component={AccountCellPhone} />
      <Stack.Screen name="AccountPassword" component={AccountPassword} />
      <Stack.Screen name="AccountCompleted" component={AccountCompleted} />
      <Stack.Screen name="AccountRazaoSocial" component={AccountRazaoSocial} />
      <Stack.Screen name="AccountAdress" component={AccountAdress} />
      <Stack.Screen name="AccountRelationsManager" component={AccountRelationsManager} />
    </Stack.Navigator>
  );
}

export default StackRoutes;