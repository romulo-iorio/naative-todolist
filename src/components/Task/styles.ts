import { StyleSheet } from "react-native";

import { globalStyles } from "@/global-styles";

const commonStyles = StyleSheet.create({
  container: {
    height: 64,
    width: "100%",
    flexDirection: "row",
    gap: 8,
    padding: 12,
    paddingRight: 8,
    backgroundColor: globalStyles.colors.gray["500"],
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
  },
  text: {
    fontFamily: globalStyles.fontFamily.regular,
    fontSize: globalStyles.fontSize.md,
    flex: 1,
  },
});

export const styles = {
  base: StyleSheet.create({
    container: {
      ...commonStyles.container,
      borderColor: globalStyles.colors.gray["400"],
    },
    text: {
      ...commonStyles.text,
      color: globalStyles.colors.gray["100"],
    },
  }),
  isDone: StyleSheet.create({
    container: {
      ...commonStyles.container,
      borderColor: globalStyles.colors.gray["500"],
    },
    text: {
      ...commonStyles.text,
      color: globalStyles.colors.gray["300"],
      textDecorationLine: "line-through",
    },
  }),
};
