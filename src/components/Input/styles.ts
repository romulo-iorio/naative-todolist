import { StyleSheet } from "react-native";

import { globalStyles } from "@/global-styles";

const commonStyles = StyleSheet.create({
  common: {
    fontSize: globalStyles.fontSize.lg,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    height: 54,
    flex: 1,
  },
});

export const styles = StyleSheet.create({
  base: {
    ...commonStyles.common,
    borderColor: globalStyles.colors.gray[700],
    backgroundColor: globalStyles.colors.gray[500],
  },
  focused: {
    ...commonStyles.common,
    borderColor: globalStyles.colors["purple-dark"],
  },
});
