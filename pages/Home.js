// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { useTheme } from "../components/ThemeContext";
import { db, logout } from "../Firebase/firebase";

// import Categories from "../components/Categories";
// import ProgramsCarousel from "../components/ProgramsCarousel";
import Posty from "../components/Posty";
import colors from "../theme/colors";

const { height, width } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.root}>
      {/* <Categories navigation={navigation} /> */}
      {/* <Text>ELO</Text> */}
      <Posty navigation={navigation} />
      {/* <ProgramsCarousel navigation={navigation} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
});

export default Home;
