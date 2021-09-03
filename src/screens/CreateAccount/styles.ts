import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray_100,
    justifyContent: 'flex-start',
  },
  header_text: {
    color: theme.colors.blue_500,
  },
  button_option_one: {
    flex: 1,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray_100,
    justifyContent: 'center',
  },
  button_option_one_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
  },
  button_option_two: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#FFF",
  },
  button_option_two_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 5,
  }
}); 