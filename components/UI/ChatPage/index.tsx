import React from "react";
import { View, Text, SafeAreaView, Platform } from "react-native";
import MessageComponent from "./MessageComponent";

export default function ChatPage() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#EDEDED",
        paddingHorizontal: 20,
        height: "100%",
      }}
    >
      <MessageComponent />
    </SafeAreaView>
  );
}
