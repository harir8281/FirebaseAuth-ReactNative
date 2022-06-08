import { StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import Notifications from "./screens/Notifications";
import Account from "./screens/Account";
import Cart from "./screens/Cart";

const Stack = createNativeStackNavigator();

function TheStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <NavigationContainer>
        <TheStack />
      </NavigationContainer>
    </>
  );
};

export default App;
