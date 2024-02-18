import { StyleSheet } from "react-native";

import { globalStyles } from "@/global-styles";

const commonStyles = StyleSheet.create({
  container: {
    height: 17.45,
    width: 17.45,
    padding: 3.27,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const styles = {
  base: StyleSheet.create({
    container: {
      ...commonStyles.container,
      borderColor: globalStyles.colors.blue,
      backgroundColor: "transparent",
    },
  }),
  isDone: StyleSheet.create({
    container: {
      ...commonStyles.container,
      borderColor: globalStyles.colors["purple-dark"],
      backgroundColor: globalStyles.colors["purple-dark"],
    },
  }),
};
