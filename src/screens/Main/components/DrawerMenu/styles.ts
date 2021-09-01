import { Dimensions, StyleSheet } from "react-native";
import theme from "../../../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: -1,
    paddingHorizontal: 15,
    backgroundColor: theme.colors.blue_500,
  },
  list_item: {
    backgroundColor: theme.colors.blue_500,
    paddingHorizontal: 0,
    margin: 0,
  },
  list_item_text: {
    color: "#FFF"
  },
  button: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: Dimensions.get('screen').width - 30,
    backgroundColor: theme.colors.blue_300,
    padding: 10,
  },
  icon_button: {
    marginRight: 10,
  }
});