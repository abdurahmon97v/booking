import { Stack, useRouter } from "expo-router";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Back } from "../../assets";
import { COLORS, SIZES } from "../../config/theme";

export const Header = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        title: "",
        headerStyle: {
          backgroundColor: COLORS.bgColor,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
          marginBottom: 2,
        },
        headerLeft: () => (
          <TouchableOpacity
            style={style.container}
            onPress={() => router.back()}
          >
            <Back style={{ marginTop: 4 }} />
            <Text style={style.text}>назад</Text>
          </TouchableOpacity>
        ),
      }}
    />
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontWeight: 600,
  },
});
