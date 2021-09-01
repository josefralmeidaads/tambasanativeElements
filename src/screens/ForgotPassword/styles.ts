import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  header_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 15
  },
  logo_content: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  main_content: {
    flex: 1,
  },
  button: {
    marginTop: 30,
    backgroundColor: theme.colors.blue_500,
    width: 180,
  },
  button_text: {
    color: "#FFF",
  },
});