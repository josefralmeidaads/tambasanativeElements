import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    marginBottom: 20,
  },
  wrapper_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 22,
  },
  wrapper_subtext: {
    color: "#777",
    fontSize: 14,
  },
  button_continue: {
    height: 70,
    backgroundColor: '#FFF',
    borderTopColor: '#BBB',
    borderTopWidth: 1,
  },
  button_continue_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
  },
});