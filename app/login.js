import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Input, Button } from "../components";
import logo from "../assets/img/logo.png";
import { useRouter } from "expo-router";
import { globalStyle } from "../style/global-style";
import { useForm } from "react-hook-form";
import { Eye } from "../assets";
import { COLORS } from "../config/theme";

export default function Login() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    reset();
    router.push("/register");
    console.log(data);
  };
  return (
    <View style={globalStyle.container}>
      <View style={style.container}>
        <View style={style.logo}>
          <Image source={logo} style={{ width: 79, height: 32 }} />
        </View>
        <Text style={[globalStyle.h1, { marginBottom: 25 }]}>D-LUXE GROUP</Text>
        <Input
          rules={{ required: true }}
          name={"email"}
          errors={errors}
          control={control}
          label={"Имя пользователя:"}
        />
        <Input
          rules={{ required: true }}
          name={"password"}
          errors={errors}
          control={control}
          label={"Пароль"}
          password
          Icon={Eye}
        />
        <Button
          propStyle={{ width: "100%" }}
          bgColor={COLORS.sBtnColor}
          title="Submit"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 107,
    height: 107,
    backgroundColor: "red",
    borderRadius: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 21,
  },
});
