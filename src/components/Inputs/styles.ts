import { StyleSheet, Dimensions } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  input_style: {
    height: 60,
    elevation: 1.5,
    padding: 15,
    color: theme.colors.gray_100,
    backgroundColor: "#FFF",
  }
});