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

const Hamburger = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Image
        resizeMethod='scale'
        resizeMode='contain'
        style={styles.image}
        source={require("../assets/logo2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 180,
    paddingTop: 20,
    marginTop: 20,
    padding: 0,
  },
  source: {
    fontSize: 12,
    fontWeight: "100",
    color: colors.primary,

    textTransform: "uppercase",
  },
  image: { width: "100%", borderRadius: 6 },
});

export default Hamburger;
