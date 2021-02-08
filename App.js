// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import "react-native-gesture-handler";
import { ThemeProvider } from "./components/ThemeContext.js";

import * as React from "react";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";

import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationActions } from "react-navigation";

import FirstPage from "./pages/Home";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleView from "./pages/SingleView";
import ThirdPage from "./pages/ThirdPage";
import Hamburger from "./components/Hamburger.js";
import ShopIcon from "./components/ShopIcon.js";
import Logo from "./components/Logo.js";
import NewsIcon from "./components/NewsIcon.js";
import colors from "./theme/colors";
// import ScrollableTabView from "react-native-scrollable-tab-view";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LeftNav = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <TouchableOpacity
      onPress={() => props.navigationProps.toggleDrawer()}
      style={{ flexDirection: "row" }}
    >
      <Hamburger />
    </TouchableOpacity>
  );
};
const RightNav = ({ navigation }) => {
  //Structure for the navigatin Drawer

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Home",
            initial: false,
          })
        }
      >
        <NewsIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Shop", {})}>
        <ShopIcon />
      </TouchableOpacity>
    </View>
  );
};

function homeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: <Logo />, //Set Header Title
          headerLeft: () => <LeftNav navigation={navigation} />,
          headerRight: () => <RightNav navigation={navigation} />,
          headerStyle: {
            backgroundColor: "#000000", //Set Header color
          },
          headerTintColor: colors.primary, //Set Header text color
          headerTitleStyle: {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
          },
        }}
      />
      <Stack.Screen
        name='Shop'
        component={Shop}
        options={{
          title: <Logo />, //Set Header Title
          headerLeft: () => <LeftNav navigation={navigation} />,
          headerRight: () => <RightNav navigation={navigation} />,
          headerStyle: {
            backgroundColor: "#000000", //Set Header color
          },
          headerTintColor: colors.primary, //Set Header text color
          headerTitleStyle: {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
          },
        }}
      />
      <Stack.Screen
        name='SingleView'
        component={SingleView}
        options={{
          title: <Logo />, //Set Header Title
          headerLeft: () => <LeftNav navigation={navigation} />,
          headerRight: () => <RightNav navigation={navigation} />,
          headerStyle: {
            backgroundColor: "#000000", //Set Header color
          },

          headerTintColor: colors.primary, //Set Header text color
          headerTitleStyle: {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName='SecondPage'
      screenOptions={{
        headerLeft: () => <LeftNav navigation={navigation} />,
        headerStyle: {
          // backgroundColor: "#f4511e", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name='SecondPage'
        component={SecondPage}
        options={{
          title: "Second Pageee", //Set Header Title
        }}
      />
      <Stack.Screen
        name='ThirdPage'
        component={ThirdPage}
        options={{
          title: "Third Pageee", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: "#e91e63",
            itemStyle: { marginVertical: 5 },
          }}
        >
          <Drawer.Screen
            name='Home'
            options={{ drawerLabel: "Newsy" }}
            component={homeStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
