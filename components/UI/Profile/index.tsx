import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";
import BodyComponent from "./BodyComponent";
import TopComponent from "./TopComponent";

export default function Profile() {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: Platform.OS === "android" ? "20%" : "10%",
        }}
      >
        <TopComponent />
        <BodyComponent />
      </View>
    </SafeAreaView>
  );
}
