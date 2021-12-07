import React from "react";

import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  StyleSheet,
} from "react-native";

import {
  useController,
  useFormContext,
  UseControllerProps,
} from "react-hook-form";


interface TextInputProps extends RNTextInputProps, UseControllerProps {
  name: string;
  defaultValue?: string;
  setFormError: Function;
}

const ControlledInput = (props: TextInputProps) => {
  const formContext = useFormContext();
  const { formState } = formContext;

  const { name, rules, defaultValue, ...inputProps } = props;

  const { field } = useController({ name, rules, defaultValue });

  const hasError = Boolean(formState?.errors[name]);

  return (
    <View style={styles.container}>
      <View>
        <RNTextInput
          autoCapitalize="none"
          textAlign="left"
          style={styles.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          {...inputProps}
        />

        <View style={styles.errorContainer}>
          {hasError && (
            <Text style={styles.error}>{formState.errors[name].message}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export const TextInput = (props: TextInputProps) => {
  const { name, rules, defaultValue, setFormError, ...inputProps } = props;

  const formContext = useFormContext();

  // Placeholder until input name is initialized
  if (!formContext || !name) {
    const msg = !formContext
      ? "TextInput must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    setFormError(true);
    return null;
  }

  return <ControlledInput {...props} />;
};

const styles = StyleSheet.create({
  container: {
    flex: -1,
    justifyContent: "center",
    padding: 8,
  },
  input: {
    backgroundColor: "white",
    borderColor: "transparent",
    width: 319,
    height: 58,
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  errorContainer: {
    flex: -1,
    height: 25,
  },
  error: {
    color: "red",
  },
});
