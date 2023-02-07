import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";
import MessageComponent from "./MessageComponent";

export default function ChatPage() {
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
        <Text
          style={{
            fontFamily: "Raleway-Bold",
            color: "#000",
            fontSize: 18,
          }}
        >
          Welcome back Bistom!
        </Text>
        <MessageComponent />
      </View>
    </SafeAreaView>
  );
}
