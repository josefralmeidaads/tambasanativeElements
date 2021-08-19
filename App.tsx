import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Routes from './src/routes/routes';
import { ThemeProvider, } from 'react-native-elements';
import theme from './src/styles/themes/theme';

 const App = () => {
   return (
     <ThemeProvider theme={theme}>
       <StatusBar barStyle="light-content" backgroundColor={theme.colors.blue_500}/>
       <Routes />
     </ThemeProvider>
   );
 };

 export default App;
