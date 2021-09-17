import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  button_back: {
    width: Dimensions.get("screen").width,
    backgroundColor: "#FFF",
    height: 70,
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
  },
  icon: {
    paddingHorizontal: 15,
  }
});