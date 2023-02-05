import React from "react";
import { View, Text } from "react-native";

export default function TopComponent() {
  return (
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
          flexDirection: "column",
          justifyContent: "space-between",
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FFFFFF",
            fontFamily: "Raleway-Regular",
          }}
        >
          Wallet Balance
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: "#FFFFFF",
            fontFamily: "Raleway-Bold",
          }}
        >
          N100,000
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          paddingVertical: 10,
        }}
      >
        <Text
             style={{
                fontSize: 16,
                color: "#FFFFFF",
                fontFamily: "Raleway-Regular",
              }}
        >Transaction History</Text>
        <Text
             style={{
                fontSize: 16,
                color: "#FFFFFF",
                fontFamily: "Raleway-Regular",
              }}
        >Withdraw</Text>
      </View>
    </View>
  );
}
