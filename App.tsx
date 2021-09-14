import React, { useEffect } from 'react';
import {
  StatusBar,
} from 'react-native';
import Routes from './src/routes/routes';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/styles/themes/theme';

 const App = () => {
   useEffect(() => {
     SplashScreen.hide();
   }, []);
   return (
     <ThemeProvider theme={theme}>
       <StatusBar barStyle="light-content" backgroundColor={theme.colors.blue_500}/>
       <Routes />
     </ThemeProvider>
   );
 };

 export default App;
