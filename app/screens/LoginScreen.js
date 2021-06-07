import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";

import * as Yup from "yup";
import { AppFormField, AppForm, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          icon="email"
          name="email"
          placeholderTxt="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        ></AppFormField>

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholderTxt="Password"
          textContentType="password"
          secureTextEntry
        />

        <View style={styles.btn}>
          <SubmitButton title="login" />
        </View>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
