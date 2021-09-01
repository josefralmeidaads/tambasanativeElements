import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Icon, useTheme } from 'react-native-elements';

import { styles } from './styles';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import BtnOferta from '../../components/btnOferta';
import SelectOptions from '../../components/selectOptions';
import DrawerMenu from './components/DrawerMenu';

const Main: React.FC = () => {
  const { theme } = useTheme();
  const [hiddenMenu, setHiddenMenu] = useState<boolean>(true);

  const data = [
    {
      type_package_icon: 'font-awesome-5',
      name_icon: 'exchange-alt',
      color_icon: theme.colors?.blue_500,
      size_icon: 35,
      subtitle: 'Transferências'
    },
    {
      type_package_icon: 'font-awesome-5',
      name_icon: 'credit-card',
      color_icon: theme.colors?.blue_500,
      size_icon: 35,
      subtitle: 'Pagamentos'
    },
    {
      type_package_icon: 'font-awesome-5',
      name_icon: 'university',
      color_icon: theme.colors?.blue_500,
      size_icon: 35,
      subtitle: 'Cobranças'
    },
  ]
  
  const data2 = [
    {
      type_package_icon: 'font-awesome-5',
      name_icon: 'coins',
      color_icon: theme.colors?.blue_500,
      size_icon: 35,
      subtitle: 'Adiantamento Ordem de Compra'
    },
    {
      type_package_icon: 'font-awesome-5',
      name_icon: 'hand-holding-usd',
      color_icon: theme.colors?.blue_500,
      size_icon: 35,
      subtitle: 'Capital de Giro'
    },
    {
      type_package_icon: 'font-awesome-5',
      name_icon: 'car',
      color_icon: theme.colors?.blue_500,
      size_icon: 35,
      subtitle: 'Financiamentos de Veículos'
    },
  ]

  return (
  <View style={styles.container}> 
    <Header 
      onChangeMenu={() => setHiddenMenu(!hiddenMenu)}
    />
    {!hiddenMenu && <DrawerMenu />}
    {hiddenMenu && <NavBar />}
    {hiddenMenu && <ScrollView showsVerticalScrollIndicator={false}>   
      <SelectOptions data={data} title="Suas operações"/>

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

      <BtnOferta 
        title="Parcele o seu orçamento"
        subtitle="Aumente as suas vendas"
        icon="calculator"
        type_icon="font-awesome-5"
        color_icon={theme.colors?.white || "white"}
        size_icon={30}
      />

      <SelectOptions data={data2} title="Serviços para você"/>
   </ScrollView>}
  </View>
  );
}

export default Main;