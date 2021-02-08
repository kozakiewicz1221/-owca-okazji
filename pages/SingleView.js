import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Left,
  Right,
  Content,
  Title,
  Button,
  Text,
  Spinner,
  Icon,
} from "native-base";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import AutoHeightWebView from "react-native-autoheight-webview";
import colors from "../theme/colors";

import GoBack from "../components/GoBack";
import HTMLView from "react-native-htmlview";

import { ScreenStackHeaderRightView } from "react-native-screens";

export default ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [deviceHeight, setDeviceHeight] = useState(null);
  const { id, post } = route.params;

  return (
    <Container>
      <Header style={{ backgroundColor: "black" }}>
        <Left>
          <GoBack onPress={() => navigation.goBack()} />
        </Left>
        <Right>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.source}>Źródło:</Text>
            <Text style={styles.source}>{post.base_url}</Text>
          </View>
        </Right>
      </Header>
      <ScrollView>
        <AutoHeightWebView
          style={{
            width: Dimensions.get("window").width,
          }}
          onSizeUpdated={(size) => setDeviceHeight(size.height)}
          files={[
            {
              href: "cssfileaddress",
              type: "text/css",
              rel: "stylesheet",
            },
          ]}
          source={{ uri: post.postUrl }}
          scalesPageToFit={true}
          viewportContent={"width=device-width, user-scalable=no"}
        />
      </ScrollView>
      <Content>
        <ActivityIndicator
          size='large'
          color={colors.primary}
          style={{ paddingVertical: 20 }}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsWrapper: {
    flexDirection: "column",
    width: "100%",
    padding: 15,
  },
  title: {
    fontSize: 27,
    color: "black",
    fontWeight: "100",
    marginVertical: 20,
    textTransform: "uppercase",
  },

  date: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "lightgrey",
    textTransform: "uppercase",
  },
  source: {
    marginRight: 15,
    fontSize: 12,
    fontWeight: "100",
    color: "lightgrey",

    textTransform: "uppercase",
  },
});
