import { StyleSheet } from "react-native";

import { globalStyles } from "@/global-styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 173,
    width: "100%",
    backgroundColor: globalStyles.colors.gray[700],
    justifyContent: "center",
    alignContent: "center",
    position: "relative",
  },
  logo: {
    width: 110.34,
    height: 32,
    padding: 0,
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
