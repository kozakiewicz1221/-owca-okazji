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

import Categories from "../components/Categories";
import ProgramsCarousel from "../components/ProgramsCarousel";
import CouponDetails from "../components/CouponDetails";
import colors from "../theme/colors";
// import Animated from "react-native-reanimated";
// import BottomSheet from "reanimated-bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";

const { height, width } = Dimensions.get("window");

const Home = ({ navigation }) => {
  const {
    programs,
    setPrograms,
    coupons,
    setCoupons,
    currentCouponActive,
    setCurrentCouponActive,
  } = useTheme();
  const sheetRef = useRef(null);
  // hooks
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => [100, "60%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const openBottomSheet = (item) => {
    bottomSheetRef.current.snapTo(1);
    console.log(currentCouponActive);
  };

  useEffect(() => {
    bottomSheetRef.current.snapTo(0);
    db.collection("coupons/")
      .limit(10)
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
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <Categories navigation={navigation} />
        <ProgramsCarousel
          navigation={navigation}
          openBottomSheet={openBottomSheet}
        />
        {/* <OfertaTygodnia programs={programs} /> */}

        {/* <ZarabiajMobilnie /> */}
      </ScrollView>
      <BottomSheet
        animateOnMount={true}
        initialSnapIndex={-1}
        topInset={0}
        handleComponent={() => null}
        // backgroundComponent={() => (
        //   <View
        //     style={{ backgroundColor: "pink", height: "100%", width: "100%" }}
        //   ></View>
        // )}
        ref={bottomSheetRef}
        initialSnapIndex={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <CouponDetails />
      </BottomSheet>

      {/* <BottomSheet
        ref={sheetRef}
        snapPoints={["60%", 0, 0]}
        onOpenStart={() => console.log("onOpenStart")}
        onOpenEnd={() => console.log("onOpenEnd")}
        onCloseStart={() => console.log("onCloseStart")}
        onCloseEnd={() => console.log("onCloseEnd")}
        style={styles.sheet}
        borderRadius={20}
        backgroundColor={colors.black}
        renderContent={() => <CouponDetails />}
        renderHeader={() => <Text>LOL</Text>}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    height: height,
    padding: 15,
  },
  sheet: {
    backgroundColor: colors.black,
  },
});

export default Home;
