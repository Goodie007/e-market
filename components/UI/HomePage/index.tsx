import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import TopComponents from "./TopComponent";
import TopComponent from "./TopComponent";

export default function Homepage() {
  return (
    <SafeAreaView
        style={{
            backgroundColor: '#063970',
            height: '100%',
        }}
    >
      <View
        style={{
            paddingHorizontal: 20,
            paddingTop: '10%',
        }}
      >
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
          <Text
            style={{
                fontFamily: 'Raleway-Bold',
                color: '#FFFFFF', 
                fontSize: 18,
            }}
          >Welcome back Bistom!</Text>
          <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
          >
            <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
            <AntDesign name="profile" size={24} color="#FFFFFF" />
          </View>
        </View>
        <TopComponent />
      </View>
    </SafeAreaView>
  );
}
