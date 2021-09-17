import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  wrapper: {
    flex: 1,
  },
  button_back: {
    width: Dimensions.get("screen").width,
    backgroundColor: "#FFF",
    height: 70,
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    borderColor: "#777",
    borderBottomWidth: 1,
  },
  icon: {
    paddingHorizontal: 15,
  }
});