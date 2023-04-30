import { Pressable, Text, StyleSheet, View } from "react-native";
import { COLORS, RADIUS, SIZES } from "../../../config/theme";

export const IconPressable = (props) => {
  const { onPress, text, Icon } = props;
  return (
    <Pressable style={style.container} onPress={onPress}>
      <Icon />
      <Text style={style.text}>{text}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: RADIUS.md,
    marginBottom: 8,
  },
  text: {
    fontSize: SIZES.xLarge,
    fontWeight: 900,
    marginLeft: 6,
  },
});
