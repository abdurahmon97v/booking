import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconPressable } from "../components";
import { Check } from "../assets";
import { COLORS, SIZES } from "../config/theme";

const HomePage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>выберите язык интерфейса:</Text>
        <IconPressable text="Русский" Icon={Check} />
        <IconPressable text="O'zbekcha" Icon={Check} />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: 600,
    color: COLORS.primary,
    marginBottom: 7,
  },
});
