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
import Truncate from "react-truncate";

import Carousel from "react-native-snap-carousel";
import Title from "./Title";

const { height, width } = Dimensions.get("window");

const ProgramsCarousel = ({ navigation, openBottomSheet }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setactiveIndex] = useState(0);
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
      <Title text='Złów nową okazję' />
      {coupons.length === 0 && (
        <ActivityIndicator size='large' color={colors.primary} />
      )}

      {coupons && (
        <Carousel
          style={{ padding: 30 }}
          layout='default'
          ref={carouselRef}
          data={coupons}
          loop
          activeSlideAlignment='start'
          activeAnimationType='spring'
          inactiveSlideOpacity={0.5}
          inactiveSlideScale={0.9}
          sliderWidth={width}
          itemWidth={width / 1.7}
          renderItem={({ item, index }) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor='white'
              style={styles.card}
              key={item.voucherTrackingUrl + 1}
              onPress={() => {
                openBottomSheet(item);
                setCurrentCouponActive(item);
              }}
              // onPress={() => {
              //   navigation.navigate("CouponDetails", {
              //     item,
              //   });
              // }}
            >
              <View>
                <Image
                  style={styles.image}
                  source={{ uri: item.programLogoUrl }}
                />

                <Text numberOfLines={2} style={styles.cardTitle}>
                  {item.voucherName}
                </Text>
              </View>
            </TouchableHighlight>
          )}
        />
      )}
    </View>
  );
};
export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "black",
    marginBottom: 20,
    fontWeight: "700",
    color: colors.primary,
  },
  root: { marginTop: 20 },
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 20,
    minHeight: 130,
    marginLeft: 0,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 19,
    color: colors.primary,
    fontWeight: "700",
  },

  image: {
    height: 50,
    width: 80,
    marginBottom: 20,
    resizeMode: "contain",
  },
});

export default ProgramsCarousel;
