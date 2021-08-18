import React, { useState } from 'react';
import { Card, Icon, useTheme, Text } from 'react-native-elements';

import { styles } from './styles';

interface ScrollItems {
  data: Item[];
}

interface Item {
  type_package_icon: string;
  name_icon: string;
  color_icon: string;
  size_icon: number;
  subtitle: string;
}

const ScrollItems: React.FC<ScrollItems> = ({ data }: ScrollItems) => {
  const { theme } = useTheme();
  const [items, setItems] = useState<Item[]>(data);
  
  return (
  <>
    { items.map((item, index) => (
    <Card containerStyle={styles.card} key={index}>
      <Icon 
        type={item.type_package_icon} 
        name={item.name_icon} 
        color={item.color_icon}
        size={item.size_icon}
      />
      <Text style={styles.cardText}>{item.subtitle}</Text>
    </Card>
    ))}
  </>
  );
}

export default ScrollItems;