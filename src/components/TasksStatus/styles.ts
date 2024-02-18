import { StyleSheet } from "react-native";

import { globalStyles } from "@/global-styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "6.773%",
    paddingRight: 24,
    paddingLeft: 24,
    height: 19,
  },
  statusContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontFamily: globalStyles.fontFamily.bold,
    fontSize: globalStyles.fontSize.md,
    color: globalStyles.colors.blue,
  },
  completedText: {
    fontFamily: globalStyles.fontFamily.bold,
    fontSize: globalStyles.fontSize.md,
    color: globalStyles.colors.purple,
  },
  count: {
    fontFamily: globalStyles.fontFamily.bold,
    fontSize: globalStyles.fontSize.sm,
    color: globalStyles.colors.gray[200],
    textAlign: "center",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 999,
    backgroundColor: globalStyles.colors.gray[400],
  },
});
