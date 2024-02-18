import { StyleSheet } from "react-native";

import { globalStyles } from "@/global-styles";

const commonStyles = StyleSheet.create({
  container: {
    height: 52,
    width: 52,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const styles = {
  base: StyleSheet.create({
    container: {
      ...commonStyles.container,
      backgroundColor: globalStyles.colors["blue-dark"],
    },
  }),
  focused: StyleSheet.create({
    container: {
      ...commonStyles.container,
      backgroundColor: globalStyles.colors["blue"],
    },
  }),
};
