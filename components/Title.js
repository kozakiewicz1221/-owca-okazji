// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import colors from "../theme/colors";

const Title = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: colors.primary,
    marginBottom: 20,
    fontWeight: "700",
    color: colors.primary,
  },
});

export default Title;
