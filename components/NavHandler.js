import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import NavigationButton from "./NavigationButton";

const NavHandler = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.conainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}
      >
        <NavigationButton
          label={"Home"}
          onPress={() => navigation.navigate("Home")}
        />
        <NavigationButton
          label={"Categories"}
          onPress={() => navigation.navigate("Categories")}
        />
        <NavigationButton
          label={"Notifications"}
          onPress={() => navigation.navigate("Notifications")}
        />
        <NavigationButton
          label={"Account"}
          onPress={() => navigation.navigate("Account")}
        />
        <NavigationButton
          label={"Cart"}
          onPress={() => navigation.navigate("Cart")}
        />
      </ScrollView>
    </View>
  );
};

export default NavHandler;

const styles = StyleSheet.create({
  conainer: {
    backgroundColor: "black",
    padding: 20,
    flexDirection: "row",
  },
});
