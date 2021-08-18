import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import ScrollItems from '../ScrollItems';
import { styles } from './styles';

interface ScrollItem {
  data: Item[];
  title: string;
}

interface Item {
  type_package_icon: string;
  name_icon: string;
  color_icon: string;
  size_icon: number;
  subtitle: string;
}

const SelectOptions: React.FC<ScrollItem> = ({ data, title }: ScrollItem) => {
  return (
    <View style={styles.scroll}>
      <Text style={styles.scrollTitleText}>{title}</Text>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
      >
        <ScrollItems data={data}/>
      </ScrollView>
    </View>
  );
}

export default SelectOptions;