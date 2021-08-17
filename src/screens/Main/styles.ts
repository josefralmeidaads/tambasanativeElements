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
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 150,
  },
  card_content: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  subcard: {
    marginLeft: 20,
  },
  text: {
    color: theme.colors.blue_500,
    fontWeight: 'bold',
  },
  subtext: {
    color: theme.colors.gray_100,
  },
  card_sum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});