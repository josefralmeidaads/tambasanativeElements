import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: 40,
    paddingVertical: 0,
  },
  input_style: {
    height: 70,
    elevation: 1.5,
    padding: 15,
  }
});