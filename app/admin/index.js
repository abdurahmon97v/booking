import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function Admin() {
  return (
    <View>
      <Stack.Screen options={{ title: "Admin", headerShown: true }} />
      <Text>Admin</Text>
    </View>
  );
}
