import { StyleSheet } from "react-native";

import { globalStyles } from "@/global-styles";

const commonStyles = StyleSheet.create({
  container: {
    height: 32,
    width: 32,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const styles = {
  base: StyleSheet.create({
    container: {
      ...commonStyles.container,
      backgroundColor: "transparent",
    },
  }),
  focused: StyleSheet.create({
    container: {
      ...commonStyles.container,
      backgroundColor: globalStyles.colors.gray[400],
    },
  }),
};
