import { StyleSheet, Pressable, Text, Animated } from "react-native";
import { COLORS, SIZES } from "../../../config/theme";

export const Button = ({ onPress, title = "Cохранит", bgColor, propStyle }) => {
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Pressable
      style={{
        ...style.container,
        ...propStyle,
        backgroundColor: bgColor ? bgColor : COLORS.green,
      }}
      onPress={onPress}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
    >
      <Animated.View
        style={{
          opacity: animated,
          paddingHorizontal: 16,
          paddingVertical: 15,
        }}
      >
        <Text style={style.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.xLarge,
    fontWeight: 700,
  },
});
