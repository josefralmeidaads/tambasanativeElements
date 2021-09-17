import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useTheme } from 'react-native-elements';

import { AdressProps } from '../../screens/AccountAdress';
import AdressInput from './components/AdressInput';
import { styles } from './styles';

interface CheckAdressProps {
  adress: {
    complement: string,
    road: string,
    number: string,
    neighboord: string,
    state: string,
    city: string,
    zipCode: string,
    add_complement: string,
  }
  onChangeText: ({}: AdressProps) => void
}

const CheckAdress: React.FC<CheckAdressProps> = ({ adress, onChangeText }: CheckAdressProps) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.data_correct}>
        <Text style={styles.data_correct_text_title}>
          Dados estão corretos?
        </Text>
        <TextInput
          value={adress.add_complement}
          placeholder="Insira o número e complemento"
          style={styles.data_correct_input}
          onChangeText={(text) => onChangeText({...adress,  add_complement: text})}
        />
      </View>

      <View style={styles.adress}>
        <Text style={styles.adress_text}>Endereço</Text>
        
        <TextInput
          value={adress.road}
          placeholder="Digite o endereço aqui"
          style={styles.adress_input}
          onChangeText={(text) => onChangeText({...adress,  road: text})}
        />
      </View>

      <View style={styles.adress_grid}>
        <View style={styles.adress_colum_one}>
          <AdressInput
            value={adress.number} 
            onChangeText={
              (text) => onChangeText(
                {...adress,  number: text}
              )
            }
            placeholder="96" 
            title="Número" 
          />
          <AdressInput
            value={adress.neighboord}
            onChangeText={
              (text) => onChangeText(
                {...adress,  neighboord: text}
              )
            } 
            placeholder="Centro" 
            title="Bairro"
          />
          <AdressInput
            value={adress.state}
            onChangeText={
              (text) => onChangeText(
                {...adress,  state: text}
              )
            } 
            placeholder="MG" 
            title="Estado" 
          />
        </View>
        
        <View style={styles.adress_colum_two}>
          <AdressInput 
            value={adress.complement}
            onChangeText={
              (text) => onChangeText(
                {...adress,  complement: text}
              )
            } 
            placeholder="SALA 301 A 304" 
            title="Complemento"
          />
          <AdressInput
            value={adress.city}
            onChangeText={
              (text) => onChangeText(
                {...adress,  city: text}
              )
            } 
            placeholder="Ubá" 
            title="Cidade" 
          />
          <AdressInput
            value={adress.zipCode}
            onChangeText={
              (text) => onChangeText(
                {...adress,  zipCode: text}
              )
            } 
            placeholder="36500-067" 
            title="CEP"
            withMask={true} 
          />
        </View>
      </View>
    </View>
  );
}

export default CheckAdress;