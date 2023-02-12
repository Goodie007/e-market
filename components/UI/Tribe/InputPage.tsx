import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Top from "./Top";

export default function InputPage() {
  return (
    <SafeAreaView
        style={{
            backgroundColor: '#FFFFFF',
            height: '100%',
        }}
    >
     <Top />
    </SafeAreaView>
  );
}
