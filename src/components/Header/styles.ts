import { StyleSheet } from "react-native";

import { globalStyles } from "@/global-styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "21.305%",
    width: "100%",
    backgroundColor: globalStyles.colors.gray[700],
    justifyContent: "center",
    alignContent: "center",
    position: "relative",
  },
  logo: {
    width: "29.424%",
    padding: 0,
    height: "18.497%",
  },
  inputContainer: {
    // width: "87.2%",
    position: "absolute",
    bottom: 0,
    transform: [{ translateY: 24 }],
    padding: 0,
    paddingRight: 24,
    paddingLeft: 24,
    flexDirection: "row",
    gap: 4,
  },
});
