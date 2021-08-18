import { StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: theme.colors.blue_300,
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  button_view: {
    marginLeft: 10,
  },
  button_title_text: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold', 
  },
  button_subtitle_text: {
    color: '#FFF',
    fontSize: 12
  },
});