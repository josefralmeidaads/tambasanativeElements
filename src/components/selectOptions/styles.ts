import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 15,
  },
  scrollTitleText:{
    color: theme.colors.blue_500,
    textAlign: 'left',
    fontWeight: 'bold',
    paddingTop: 10,
  }
});