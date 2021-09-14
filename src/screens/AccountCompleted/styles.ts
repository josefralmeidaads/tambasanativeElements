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
  icon: {
    margin: 0,
    padding: 0,
    paddingVertical: 15,
    alignSelf: 'flex-start',
  },
  wrapper_text: {
    color: theme.colors.blue_500,
    fontSize: 20,
    fontWeight: 'bold',
  },
  wrapper_image: {
    flex: 1,
    resizeMode: "contain",
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#FFF',
    height: 70,
  },
  btn_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 18
  }
});