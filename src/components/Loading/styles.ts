import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
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
  loading: {
    width: 0,
    height: 50,
  },
});