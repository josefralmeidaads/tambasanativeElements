import { Dimensions, StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    margin: 10,
    backgroundColor: "#CCD",
    
  },
  header_text: {
    color: theme.colors.blue_500,
  },
  button_option_one: {
    flex: 1,
    padding: 10,
  },
  button_option_one_text: {
    color: theme.colors.blue_500,
  },
  button_option_two: {
    flex: 1,
    padding: 10,
  },
  button_option_two_text: {
    color: theme.colors.blue_500,
  }
}); 