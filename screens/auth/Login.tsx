import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import Constants from "expo-constants";
import { TextInput } from "./components/TextInput";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  // useForm hook and set default behavior/values
  const { ...methods } = useForm({ mode: "onChange" });

  const navigation = useNavigation();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredentials: any) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error: any) => alert(error.message));
  };

  const [formError, setError] = useState<Boolean>(false);

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log({ errors });
  };

  return (
    <View style={styles.container}>
      {formError ? (
        <View>
          <Text style={{ color: "red" }}>
            There was a problem with loading the form. Please try again later.
          </Text>
        </View>
      ) : (
        <>
          <FormProvider {...methods}>
            <TextInput
              name="email"
              placeholder="jon.doe@email.com"
              keyboardType="email-address"
              rules={{
                required: "Email is required!",
                pattern: {
                  value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                  message: "Must be formatted: john.doe@email.com",
                },
              }}
              setFormError={setError}
            />
            <TextInput
              name="password"
              secureTextEntry
              placeholder="**********"
              rules={{ required: "Password is required!" }}
              setFormError={setError}
            />
          </FormProvider>
        </>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={methods.handleSubmit(onSubmit, onError)}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    color: "white",
    width: 321,
    height: 56,
    backgroundColor: "#F8774A",
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    marginTop: 30,
  },
});
