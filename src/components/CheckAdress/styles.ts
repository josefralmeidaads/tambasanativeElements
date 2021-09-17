import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  data_correct: {

  },
  data_correct_text_title: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: -5,
  },
  data_correct_input: {
    paddingVertical: -10,
    paddingHorizontal: 0,
  },
  adress: {
    paddingVertical: 5,
  },
  adress_text: {
    color: theme.colors.blue_500,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: -5,
  },
  adress_input: {
    paddingHorizontal: 0,
    paddingVertical: -10,
    fontWeight: 'bold',
    color: "#777",
  },
  adress_grid: {
    flex: 1,
    flexDirection: 'row',
  },
  adress_colum_one: {
    flex: 1,
  },
  adress_colum_two: {
    flex: 1,
  },
});