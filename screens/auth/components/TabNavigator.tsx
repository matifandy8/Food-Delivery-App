import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SignUp from "../SignUp";
import Login from "../Login";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        elevation: 0,
        shadowOpacity: 0,
        borderWidth: 0,
        backgroundColor: "#fff",

        labelStyle: {
          fontSize: 18,
          fontFamily: "poppins-regular",
          fontWeight: "600",
        },
        indicatorStyle: {
          backgroundColor: "#FF4B3A",
        },
      }}
      style={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="Login"
        options={{ tabBarLabel: `Login` }}
        children={() => <Login />}
      />
      <Tab.Screen
        name="SingUp"
        options={{ tabBarLabel: `Sign Up` }}
        children={() => <SignUp />}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
