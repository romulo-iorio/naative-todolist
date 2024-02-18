import { StyleSheet } from "react-native";

import { globalStyles } from "@/global-styles";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderTopWidth: 1,
    borderColor: globalStyles.colors.gray[400],
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    color: globalStyles.colors.gray[300],
    fontSize: globalStyles.fontSize.md,
    fontFamily: globalStyles.fontFamily.bold,
  },
  actionText: {
    color: globalStyles.colors.gray[300],
    fontSize: globalStyles.fontSize.md,
    fontFamily: globalStyles.fontFamily.regular,
  },
});
