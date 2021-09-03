import { Dimensions, StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    height: Dimensions.get('screen').height - 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginHorizontal: 5,
    padding: 20, 
  },
  wrapper: {
    flex: 1,
  },
  icon: {
    alignSelf: 'flex-start',
  },
  container_image:{
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 40,
  },
  container_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    textAlign: 'center',
  },
  close_button: {
    backgroundColor: theme.colors.blue_500,
    marginBottom: 30,
  },
  container_warning_button: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warning_button: {
    flex: 1,
    padding: 5,
  },
  warnin_button_no: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: '#AAA',
    height: 40,
  },
  warnin_button_no_text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 16,
  },
  warnin_button_yes: {
    backgroundColor: theme.colors.blue_500,
    height: 40,
  },
  warnin_button_yes_text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});