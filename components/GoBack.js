import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

export default ({ navigation, ...props }) => (
  <TouchableWithoutFeedback {...props}>
    <View style={styles.container}>
      <Icon style={styles.icon} name='arrow-back' />
      <Text style={styles.text}> Powrót</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    color: "white",
    paddingVertical: 20,
  },
  text: { fontSize: 18, fontWeight: "bold", color: "white", marginLeft: 3 },
  icon: { fontSize: 18, color: "white" },
});
