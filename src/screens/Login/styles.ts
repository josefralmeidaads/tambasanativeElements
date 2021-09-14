import { Dimensions, StyleSheet } from "react-native";
import theme from "../../styles/themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    position: "absolute",
    flex: 1,
    zIndex: 1,
    top: Dimensions.get("screen").height/3,
    bottom: Dimensions.get("screen").height/3,
    left: Dimensions.get("screen").width/2.7,
    right: Dimensions.get("screen").width/2.7,
    backgroundColor: 'rgba(20, 34, 0, 0.5)',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
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
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.blue_500,
    height: 80,
    paddingVertical: 10,
    bottom: 0,
    top: Dimensions.get('window').height - 80,
    left: 0,
    right: 0,
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