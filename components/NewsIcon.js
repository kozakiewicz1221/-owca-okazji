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
import Icon from "react-native-vector-icons/Ionicons";

const NewsIcon = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Icon name='newspaper-outline' size={22} color='white' />

      <Text style={styles.source}>NEWSY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  source: {
    fontSize: 12,
    fontWeight: "100",
    color: "white",

    textTransform: "uppercase",
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default NewsIcon;
