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

import colors from "../theme/colors";

const { height, width } = Dimensions.get("window");

const Categories = ({ navigation, programs }) => {
  const { activeCategory, setActiveCategory, coupons, setCoupons } = useTheme();

  const categories = [
    {
      categoryId: 17,
      icon: "hamburger",

      name: "Jedzenie",
    },
    {
      categoryId: 12,
      icon: "tv",
      name: "Gadżety",
    },

    {
      categoryId: 10,
      icon: "shopping-basket",

      name: "Moda",
    },
    {
      categoryId: 11,
      icon: "spa",

      name: "Zdrowie i uroda",
    },

    {
      categoryId: 3,
      icon: "home",

      name: "Dom i ogród",
    },

    {
      categoryId: 16,
      icon: "heart",

      name: "Sport i rekreacja",
    },
    {
      categoryId: 9,
      icon: "lightbulb",
      name: "Elektronika",
    },
    {
      categoryId: 4,
      icon: "child",

      name: "Dla dziecka",
    },
    {
      categoryId: 2,
      name: "Biżuteria i zegarki",
      icon: "circle",
    },

    {
      categoryId: 8,
      icon: "headphones",

      name: "Książki, muzyka, film,",
    },
    {
      categoryId: 13,
      icon: "car",

      name: "Motoryzacja",
    },
    {
      categoryId: 1,
      icon: "suitcase",

      name: "Biuro i firma",
    },
    {
      categoryId: 5,
      icon: "circle",

      name: "Szkolenia",
    },
    {
      categoryId: 14,
      icon: "venus-mars",

      name: "Erotyka",
    },

    {
      categoryId: 19,
      icon: "circle",

      name: "Usługi",
    },
    {
      categoryId: 20,
      icon: "circle",

      name: "Artykuły plastyczne",
    },
    {
      categoryId: 21,
      icon: "circle",

      name: "Multibranżowy",
    },
    {
      categoryId: 22,
      icon: "circle",

      name: "Lifestyle",
    },
    {
      categoryId: 25,
      icon: "circle",

      name: "Zwierzęta",
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
            key={item.categoryId}
            activeOpacity={0.3}
            style={{
              ...styles.carouselItem,
              // backgroundColor:
              //   activeCategory === item.categoryId
              //     ? colors.primary
              //     : colors.lightGrey,
            }}
            onPress={() => {
              navigation.navigate("Listing");
              setActiveCategory(item.categoryId);
              console.log(item.categoryId);
            }}
          >
            <View style={styles.pill}>
              {/* <FontIcon
                name={item.icon}
                color={colors.primary}
                size={15}
                style={{
                  ...styles.icon,
                  color:
                    activeCategory === item.categoryId
                      ? colors.lightPurple
                      : colors.primary,
                }}
              /> */}
              <Text
                style={{
                  ...styles.carouselText,
                  // color:
                  //   activeCategory === item.categoryId
                  //     ? colors.black
                  //     : colors.black,
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
    paddingVertical: 0,
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
