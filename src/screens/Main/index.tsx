import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Icon, useTheme } from 'react-native-elements';

import { styles } from './styles';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import ScrollItems from '../../components/ScrollItems';
import BtnPrimario from '../../components/btnPrimario';

const Main: React.FC = () => {
  const { theme } = useTheme();
  return (
  <View style={styles.container}>  
    <Header />
    <NavBar />
    
    <View style={styles.scroll}>
      <Text style={styles.scrollTitleText}>Sua operações</Text>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
      >
        <ScrollItems />
      </ScrollView>
    </View>

    <Card containerStyle={styles.card}>
      <View style={styles.card_content}>
        <Icon 
          type="font-awesome-5" 
          name="comment-dollar"
          color={theme.colors?.blue_light}
          size={35}
        />
        <View style={styles.subcard}>
          <Text style={styles.text}>Cobrança</Text>
          <Text style={styles.subtext}>Gerencie suas cobranças e recebíveis</Text>
        </View>
      </View>

      <Card.Divider/>
      <View style={styles.card_sum}>
        <Text style={styles.text}>Total a receber</Text>
        <Text style={styles.subtext}>R$ 0,00</Text>
      </View>
    </Card>

    <BtnPrimario />
  </View>
  );
}

export default Main;