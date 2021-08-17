import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 105,
    height: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 10,
  }
});