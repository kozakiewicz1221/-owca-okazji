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
  FlatList,
} from "react-native";
import colors from "../theme/colors";
import { useTheme } from "./ThemeContext";
import Truncate from "react-truncate";
import moment from "moment";
import { db, logout } from "../Firebase/firebase";

import Carousel from "react-native-snap-carousel";
import Title from "./Title";

const width = Dimensions.get("window").width;
const Posty = ({ navigation }) => {
  const { posts, setPosts, loading, setLoading } = useTheme();
  const [latestDoc, setLatestDoc] = useState();
  const [sorted, setSorted] = useState([]);
  const [fetchCount, setFetchCount] = useState(0);
  useEffect(() => {
    const getNextPosts = async () => {
      const ref = db
        .collection("hempPosts/")
        .orderBy("date_gmt", "desc")
        .startAfter(latestDoc || "")
        .limit(20);

      const data = await ref.get();
      setLatestDoc(data.docs[19]);

      data.docs.forEach((doc) => {
        const post = doc.data();
        setPosts((prevState) => [...prevState, post]);
      });
      setLoading(false);
      setSorted(posts.sort((a, b) => new Date(b.date) - new Date(a.date)));
    };
    getNextPosts();
  }, [fetchCount]);

  moment.updateLocale("pl", {
    relativeTime: {
      future: "w %s",
      past: "%s temu",
      s: "kilka sekund",
      ss: "%d seconds",
      m: "minuta",
      mm: "%d minuty",
      h: "godzinę",
      hh: "%d godziny",
      d: "1 dzień",
      dd: "%d dni",
      w: "a tydzień",
      ww: "%d tygodnie",
      M: "miesiąc",
      MM: "%d miesiące",
      y: "rok",
      yy: "%d lat",
    },
  });
  moment.locale("pl");

  return (
    <View style={styles.root}>
      {/* <Title text='Złów nową okazję' /> */}
      {loading && <ActivityIndicator size='large' color={colors.primary} />}
      {posts && (
        <FlatList
          // ListFooterComponent={renderFooter}
          // onRefresh={onRefresh}
          // refreshing={fetching}
          onEndReached={() => setFetchCount((prevState) => prevState + 1)}
          keyExtractor={(item, index) => index.toString()}
          data={posts}
          renderItem={({ item, i }) => (
            <TouchableHighlight
              onPress={() =>
                navigation.navigate("SingleView", {
                  post: item,
                  id: item.id,
                })
              }
              key={item.id}
              activeOpacity={0.8}
              underlayColor='#ffffff'
            >
              <View style={styles.box}>
                {item.images !== "" && (
                  <Image
                    resizeMode='cover'
                    resizeMethod='scale'
                    style={styles.image}
                    source={{
                      uri: item.images,
                    }}
                    resize='cover'
                  />
                )}
                <View style={styles.content}>
                  <Text style={styles.date}>{moment(item.date).fromNow()}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.source}>{item.base_url}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  postsWrapper: {},
  box: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    paddingVertical: width < 360 ? 17 : 30,

    borderBottomWidth: 1,
    alignItems: "center",
    borderBottomColor: "rgba(0,0,0,0.05)",
  },
  title: {
    fontSize: width < 360 ? 14 : 19,
    color: colors.black,
    fontWeight: "bold",
    marginVertical: width < 360 ? 10 : 15,
  },
  source: {
    // borderWidth: 1,
    borderColor: "lightgrey",
    // paddingVertical: 4,
    // paddingHorizontal: 8,
    fontSize: width < 360 ? 13 : 15,
    // borderRadius: 50,
    color: "lightgrey",
    textTransform: "uppercase",
    alignSelf: "flex-start",
  },
  date: {
    fontSize: width < 360 ? 13 : 15,
    fontWeight: "500",
    color: "lightgrey",
    textTransform: "uppercase",
  },
  // excerpt: {
  //   marginTop: 10,
  //   fontSize: 10,
  //   color: "darkgrey",
  // },
  image: {
    width: "25%",
    height: width < 360 ? 70 : 110,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  content: {
    width: "75%",
    paddingHorizontal: width < 360 ? 7 : 15,
  },
});

export default Posty;
