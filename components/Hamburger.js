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
import Icon from "react-native-vector-icons/Ionicons";

const Hamburger = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Icon
        name='menu'
        size={40}
        style={{ marginTop: 10, marginLeft: 10 }}
        color='white'
      />
    </View>
  );
};

export default Hamburger;
