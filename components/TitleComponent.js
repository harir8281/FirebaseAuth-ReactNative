import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleComponent = ({ screenName, subTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenName}>{screenName}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export default TitleComponent;

const styles = StyleSheet.create({
  container: {
      flexDirection:"row",
      justifyContent:"space-between",
      padding:20,
      backgroundColor:"black"
  },
  screenName: {
      fontSize:25,
      color:"white",
      fontWeight:"600"
  },
  subTitle: {
      color:"white"
  },
});
