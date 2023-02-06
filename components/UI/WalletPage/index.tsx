import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";
import TopComponent from "../HomePage/TopComponent";

export default function WalletPage() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#EDEDED",
        height: "100%",
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: Platform.OS === "android" ? "20%" : "10%",
        }}
      >
        <TopComponent />
      </View>
    </SafeAreaView>
  );
}
