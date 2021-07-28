import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    backgroundColor: "blue",
  },
});

const Nav = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

export default Nav;
