import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import TopComponents from "./TopComponent";
import TopComponent from "./TopComponent";
import AddButton from "./AddButton";
import ItemComponent from "./ItemComponent";
import ItemScrollView from "./ItemComponent/ItemsScrollView";

export default function Homepage() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#D3D3D3",
        height: "100%",
      }}
    >
      <ScrollView>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: "10%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Raleway-Bold",
              color: "#000",
              fontSize: 18,
            }}
          >
            Welcome back Bistom!
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 35,
                height: 35,
                borderRadius: 35/2,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#FFFFFF"
              />
            </View>
          </View>
        </View>
        <TopComponent />
        <ItemScrollView />
      </View>
      </ScrollView>
      <AddButton />
    </SafeAreaView>
  );
}
