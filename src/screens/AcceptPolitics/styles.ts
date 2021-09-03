import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  wrapper: {
    flex: 1,
    padding: 15,
  },
  wrapper_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
  },
  btn_back: {
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    marginBottom: 10,
  },
  check_box: {
    paddingHorizontal: 0,
    paddingVertical: 20,
    borderWidth: 0,
    backgroundColor: '#FFF',
  },
  btn_continue: {
    height: 70,
    borderRadius: 0,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: "#BBB"
  },
  btn_continue_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 18,
  }
});