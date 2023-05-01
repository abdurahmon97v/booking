import React from "react";
import { COLORS, RADIUS, SIZES } from "../../config/theme";
import { Controller } from "react-hook-form";
import { View, Text, StyleSheet, TextInput } from "react-native";
export const Input = ({
  label,
  Icon,
  password,
  placeholder,
  control,
  rules = {},
  name,
}) => {
  const [hidePass, setHidePass] = React.useState(password);
  const showPass = () => {
    setHidePass(!hidePass);
  };

  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <View
              style={[
                style.inputContainer,
                { borderColor: error ? "red" : "#000" },
              ]}
            >
              <TextInput
                secureTextEntry={hidePass}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                style={[style.inp, { width: Icon ? "95%" : "100%" }]}
              />
              {Icon ? <Icon onPress={showPass} /> : ""}
            </View>
            {error && <Text style={{ color: "red" }}>This is required.</Text>}
          </>
        )}
      />
    </View>
  );
};
const style = StyleSheet.create({
  label: {
    marginBottom: 11,
    marginLeft: 5,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontWeight: 800,
  },
  container: {
    marginBottom: 12,
    width: "100%",
  },
  inputContainer: {
    borderRadius: RADIUS.md,
    height: 45,
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inp: {
    height: "100%",
    fontSize: 20,
  },
});
