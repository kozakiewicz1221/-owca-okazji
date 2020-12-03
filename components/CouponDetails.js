import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import colors from "../theme/colors";
import { useTheme } from "./ThemeContext";

const CouponDetails = () => {
  const {
    programs,
    setPrograms,
    coupons,
    setCoupons,
    currentCouponActive,
    setCurrentCouponActive,
  } = useTheme();

  return (
    <View style={styles.root}>
      {currentCouponActive && <Text>{currentCouponActive.programName}</Text>}
    </View>
  );
};
export const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.lightGrey,
    height: "100%",
    marginTop: 50,
  },
});

export default CouponDetails;
