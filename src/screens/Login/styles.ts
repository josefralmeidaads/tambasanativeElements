import { Dimensions, StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content_text: {
    textAlign: 'right',
    color: theme.colors.blue_500,
    fontWeight: 'bold',
    width: Dimensions.get('screen').width,
    paddingHorizontal: 45,
    paddingBottom: 40,
  },
  btn_content: {
    width: 160,
    height: 40,
    backgroundColor: theme.colors.blue_500,
  },
  btn_content_text: {
    fontSize: 12,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.blue_500,
    height: 80,
    paddingVertical: 10,
  },
  btn_footer: {
    backgroundColor: '#FFF',
    width: 220,
    height: 40,
  },
  btn_footer_text: {
    color: theme.colors.blue_500,
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer_text: {
    color: theme.colors.blue_light,
    fontWeight: 'bold',
    paddingVertical: 15,
  }
});