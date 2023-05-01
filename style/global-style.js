import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../config/theme";

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    padding: 17,
  },
  h1: {
    color: COLORS.primary,
    fontSize: SIZES.xxLarge,
    fontWeight: 700,
  },
});
