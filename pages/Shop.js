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
  Image,
} from "react-native";
import { useTheme } from "../components/ThemeContext";
import { db, logout } from "../Firebase/firebase";
import Categories from "../components/Categories";

import colors from "../theme/colors";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 10,
    backgroundColor: colors.lightGrayPurple,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: colors.lightGrayPurple,
  },
  productWrapper: {
    width: "50%",
    padding: 10,
  },
  img: {
    width: "100%",
    height: 270,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgray",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: colors.primary,
  },
  detailsWrapper: {
    marginTop: 10,
    textTransform: "uppercase",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cena: {
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: colors.primary,
    color: colors.white,
    padding: 5,
  },
  provider: {
    marginLeft: 10,
  },
  kupionych: {
    fontSize: 14,
    color: "grey",
    marginTop: 5,
  },
});

const Shop = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const { activeCategory, setActiveCategory, coupons, setCoupons } = useTheme();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setLoading(true);
      console.log(activeCategory);
      const res = await fetch(
        `https://konopna-galaktyka.fancycod.hs10.linux.pl/wp-json/wp/v2/posts?_embed&categories=${
          activeCategory === 999 ? "" : activeCategory
        }`
      );
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    })();
  }, [activeCategory]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch(
  //       `https://konopna-galaktyka.fancycod.hs10.linux.pl/wp-json/wp/v2/posts?_embed`
  //     );
  //     const data = await res.json();
  //     setProducts(data);
  //   })();
  // },[activeCategory])

  return (
    <View style={styles.root}>
      <View>
        <Categories navigation={navigation} />
      </View>
      <View style={styles.wrapper}>
        {loading && (
          <View style={{ justifyContent: "center", width: "100%" }}>
            <ActivityIndicator
              style={{ marginTop: 30 }}
              size='large'
              color={colors.primary}
            />
          </View>
        )}

        {products.length === 0 && activeCategory != 999 && !loading && (
          <View>
            <Text style={{ marginTop: 20, fontSize: 24 }}>
              Nie znaleziono produktów
            </Text>
            <TouchableHighlight
              activeOpacity={0.3}
              style={{
                backgroundColor: colors.primary,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 20,
                marginTop: 20,
              }}
              onPress={() => setActiveCategory(999)}
            >
              <Text style={{ color: colors.white, fontSize: 18 }}>
                Pokaż wszystkie
              </Text>
            </TouchableHighlight>
          </View>
        )}
        {products &&
          !loading &&
          products.map((product) => (
            <View style={styles.productWrapper} key={product.id}>
              <Image
                resizeMode='cover'
                style={styles.img}
                source={{ uri: product.acf.zdjecie }}
              ></Image>
              <View style={styles.detailsWrapper}>
                <Text style={styles.cena}> {product.acf.cena} zł</Text>

                <Image
                  style={styles.provider}
                  source={require("../assets/allegro.png")}
                />
              </View>
              <Text style={styles.title}>{product.title.rendered}</Text>
              <Text style={styles.kupionych}>
                Kupionych: {product.acf.kupionych} szt
              </Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default Shop;
