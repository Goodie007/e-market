import React from "react";
import { View, Text, Platform } from "react-native";

export default function TopComponent() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingTop: Platform.OS === "android" ? "20%" : "10%",
      }}
    >
      <View
        style={{
          backgroundColor: "#063970",
          height: 100,
          borderRadius: 10,
          paddingHorizontal: 10,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
            style={{
                backgroundColor: '#FFFFFF',
                width: 60,
                height: 60,
                borderRadius: 60/2,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 20,
            }}
        >
            <Text
                style={{
                    fontFamily: 'Raleway-Bold',
                    fontSize: 20,

                }}
            >JJ</Text>
        </View>
        <View>
            <Text 
                style={{
                    color: 'white'
                }}
            >Hello</Text>
        </View>
      </View>
    </View>
  );
}
