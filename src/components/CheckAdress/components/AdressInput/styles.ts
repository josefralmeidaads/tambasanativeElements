import { StyleSheet } from "react-native";
import theme from "../../../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  adress_title: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: -5,
  },
  adress_input: {
    paddingHorizontal: 0,
    paddingVertical: -10,
    fontWeight: 'bold',
    color: "#777",
  },
});