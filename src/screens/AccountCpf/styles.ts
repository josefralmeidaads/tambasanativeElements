import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    alignItems: 'flex-start',
    padding: 15,
  },
  icon: {
    padding: 0,
    margin: 0,
  },
  button_back: {
    paddingHorizontal: 0,
  },
  wrapper_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 22,
  }
});