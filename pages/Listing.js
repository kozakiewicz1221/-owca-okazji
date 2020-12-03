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
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { useTheme } from "../components/ThemeContext";
import { db, logout } from "../Firebase/firebase";
import Categories from "../components/Categories";

import colors from "../theme/colors";

import BottomSheet from "@gorhom/bottom-sheet";

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",

    backgroundColor: colors.lightGrayPurple,
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: colors.lightGrayPurple,
    paddingHorizontal: 5,
  },
  outer: {
    width: "50%",
    height: 200,
    padding: 7,
  },
  inner: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.primary,
    textAlign: "center",
  },
});

const Category = ({ navigation }) => {
  const { activeCategory, setActiveCategory, coupons, setCoupons } = useTheme();

  // // const { from, id, name } = navigation.state.params;
  // console.log(activeCategory);
  // // console.log(navigation.state.params);
  // // const { programs, setActiveCategory, coupons, setCoupons } = useTheme();
  // const [filtered, setFiltered] = useState([]);

  // useEffect(() => {
  //   setFiltered(
  //     coupons.filter((coupon) => coupon.categoryId == activeCategory)
  //   );

  //   // return () => setActiveCategory(null)
  // }, [activeCategory]);

  useEffect(() => {
    db.collection("coupons/")
      .where("categoryId", "===", activeCategory)
      .limit(40)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          setCoupons((prevState) => [...prevState, doc.data()]);
        });
      })
      .then(() => console.log(coupons))

      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    return () => {};
  }, [activeCategory]);

  return (
    <View style={styles.root}>
      {/* <Categories navigation={navigation} /> */}
      <ScrollView>
        <Categories navigation={navigation} />

        <Text style={styles.title}>{name} - Najnowsze kupony</Text>
        <View style={styles.wrapper}>
          {coupons.length === 0 && (
            <ActivityIndicator size='large' color={colors.primary} />
          )}
          {coupons &&
            coupons.map((item) => (
              <TouchableHighlight
                activeOpacity={0.1}
                underlayColor='rgba(0,0,0,0.001)'
                style={styles.outer}
                key={item.categoryId + Math.random()}
                onPress={() => {
                  navigation.navigate("CouponDetails", {
                    item,
                  });
                }}
              >
                <View style={styles.inner}>
                  <Text>{item.categoryName}</Text>
                  <Text>{item.programName}</Text>
                  <Text>{item.voucherCode}</Text>
                  <Text>{item.vouchername}</Text>
                </View>
              </TouchableHighlight>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;
