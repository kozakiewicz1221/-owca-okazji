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
} from "react-native";
import colors from "../theme/colors";

const Hamburger = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require("../assets/hamburger.png")}
        fadeDuration={0}
        style={{ width: 30, height: 30, padding: 10, marginLeft: 15 }}
      />
    </View>
  );
};

export default Hamburger;
