import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: -1,
    backgroundColor: theme.colors.blue_500,
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  saldo: {
    
  },
  saldo_text: {
    color: 'white',
  },
  saldo_text_valor: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btnExtrato: {
    backgroundColor: theme.colors.blue_200,
    borderRadius: 10,
    width: 100,
    marginLeft: 10,
  },
});