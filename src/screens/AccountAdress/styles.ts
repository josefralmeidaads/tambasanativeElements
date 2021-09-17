import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  button: {
   height: 70,
   alignSelf: 'flex-start',
   backgroundColor: '#FFF',
   paddingHorizontal: 0,
   paddingVertical: 0,
   margin: 0,
  },
  icon: {
    paddingHorizontal: 15,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 15,
  },
  data_correct: {

  },
  data_correct_text_title: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 20,
  },
  data_correct_input: {
    paddingVertical: -10,
    paddingHorizontal: 0,
  },
  button_continue: {
    height: 70,
    backgroundColor: '#FFF',
  },
  button_continue_text: {
    color: theme.colors.blue_500,
    fontSize: 16,
    fontWeight: 'bold',
  }
});