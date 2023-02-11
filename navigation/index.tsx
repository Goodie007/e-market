/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, FontAwesome, Foundation } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Platform, Pressable } from "react-native";
import Homepage from "../components/UI/HomePage";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import Wallet from "../screens/Wallet";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Order from "../components/UI/Order";
import ChatPage from "../components/UI/ChatPage";
import ChatRoom from "../components/UI/ChatPage/ChatRoom";
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Hompage from "../screens/Home";
import { BlurView } from "expo-blur";
import Profile from "../components/UI/Profile";
import Tribe from "../components/UI/Tribe";
import InputPage from "../components/UI/Tribe/InputPage";
//import { BlurView } from "expo-blur";

const arrowBack = require('../../Remake/assets/icons/chevron-left.png')

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      //theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          //headerBackImageSource: require('../assets/icons/chevron-left'),
          //headerBackImageSource: arrowBack,
          headerTitleAlign: 'center',
          title: 'chatty',
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTintColor: '#000',
          headerLeft: () => <AntDesign name="arrowleft" size={24} color={'black'} onPress={() => navigation.goBack()} />,
        }}
        //initialParams={}
      />
      <Stack.Screen
        name="Test"
        component={InputPage}
       />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Homepage}
        options={{
          title: "Homepage",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color="#063970" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: "Wallet",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="wallet" size={24} color="#063970" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Order"
        component={Order}
        options={{
          title: "Order",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="wallet" size={24} color="#063970" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={ChatPage}
        options={{
          title: "Message",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Entypo name="mail" size={24} color="#063970" />
          ),
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
       <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color="#063970" />
          ),
        }}
      />

      {/* <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      /> */}
      <BottomTab.Screen
        name="TabTwo"
        component={Tribe}
        options={{
          title: "Test",
          headerShown: false,
         // headerLeft: () => <AntDesign name="arrowleft" size={24} color={'black'} onPress={() => navigation.goBack()},
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={'#063970'} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
