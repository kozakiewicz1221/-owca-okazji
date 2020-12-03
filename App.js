// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import "react-native-gesture-handler";
import { ThemeProvider } from "./components/ThemeContext.js";

import * as React from "react";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FirstPage from "./pages/Home";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ThirdPage from "./pages/ThirdPage";
import Hamburger from "./components/Hamburger.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
  return (
    <TouchableOpacity onPress={() => toggleDrawer()}>
      <Hamburger />
    </TouchableOpacity>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            // backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name='Listing'
        component={Listing}
        options={{
          title: "Najnowsze kupony rabatowe", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            // backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
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
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#f4511e", //Set Header color
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
          title: "Second Page", //Set Header Title
        }}
      />
      <Stack.Screen
        name='ThirdPage'
        component={ThirdPage}
        options={{
          title: "Third Page", //Set Header Title
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
            name='FirstPage'
            options={{ drawerLabel: "First page Option" }}
            component={firstScreenStack}
          />
          <Drawer.Screen
            name='SecondPage'
            options={{ drawerLabel: "Second page Option" }}
            component={secondScreenStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
