import React from 'react';
import { Card, Icon, useTheme, Text } from 'react-native-elements';

import { styles } from './styles';

const ScrollItems: React.FC = () => {
  const { theme } = useTheme();
  return (
  <>  
    <Card containerStyle={styles.card}>
      <Icon 
        type="font-awesome-5" 
        name="exchange-alt" 
        color={theme.colors?.blue_500}
        size={35}
      />
      <Text style={styles.cardText}>Transferências</Text>
    </Card>

    <Card containerStyle={styles.card}>
      <Icon 
        type="font-awesome-5" 
        name="credit-card" 
        color={theme.colors?.blue_500}
        size={35}
      />
      <Text style={styles.cardText}>Pagamentos</Text>
    </Card>

    <Card containerStyle={styles.card}>
      <Icon 
        type="font-awesome-5" 
        name="university" 
        color={theme.colors?.blue_500}
        size={35}
      />
      <Text style={styles.cardText}>Cobranças</Text>
    </Card>
  </>
  );
}

export default ScrollItems;