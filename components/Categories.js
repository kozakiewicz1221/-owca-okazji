import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  View,
  Text,
  Button,
  ClippingRectangle,
} from "react-native";
// import FontIcon from "react-native-vector-icons/FontAwesome5";
// import { SimpleAnimation } from 'react-native-simple-animations'
import { useTheme, useThemeUpdate } from "./ThemeContext";
import FontIcon from "react-native-vector-icons/FontAwesome5";

import colors from "../theme/colors";

const { height, width } = Dimensions.get("window");

const Categories = ({ navigation, programs }) => {
  const { activeCategory, setActiveCategory, coupons, setCoupons } = useTheme();

  const categories = [
    {
      id: 999,
      icon: "hamburger",
      name: "Wszystko",
    },
    {
      id: 3,
      icon: "hamburger",
      name: "Olejki CBD",
    },
    {
      id: 2,
      icon: "tv",
      name: "Susz",
    },

    {
      id: 4,
      icon: "shopping-basket",
      name: "Herbaty",
    },
    {
      id: 5,
      icon: "shopping-basket",
      name: "Jointy",
    },
    {
      id: 6,
      icon: "shopping-basket",
      name: "Kosmetyki",
    },
    {
      id: 7,
      icon: "shopping-basket",
      name: "Liquidy do Vape",
    },
  ];

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.carousel}
        horizontal
        alwaysBounceHorizontal
        bounces
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((item) => (
          <TouchableHighlight
            key={item.id}
            activeOpacity={0.3}
            style={{
              ...styles.carouselItem,
              backgroundColor:
                activeCategory === item.id ? colors.primary : colors.white,
            }}
            onPress={() => {
              console.log(item.name);
              setActiveCategory(item.id);
            }}
          >
            <View style={styles.pill}>
              <FontIcon
                name={item.icon}
                color={colors.primary}
                size={15}
                style={{
                  ...styles.icon,
                  color:
                    activeCategory === item.id ? colors.white : colors.primary,
                }}
              />
              <Text
                style={{
                  ...styles.carouselText,
                  color:
                    activeCategory == item.id ? colors.white : colors.primary,
                }}
              >
                {item.name}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    </View>
  );
};
export const styles = StyleSheet.create({
  root: {
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 30,
    color: "black",
    marginBottom: 20,
    fontWeight: "700",
  },
  carousel: {},
  pill: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 6,
  },
  carouselText: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: "100",
  },
  carouselItem: {
    padding: 15,
    borderRadius: 50,
    marginLeft: 0,
    marginRight: 15,
    backgroundColor: "white",
    elevation: 2,
    marginVertical: 5,
  },
});

export default Categories;
