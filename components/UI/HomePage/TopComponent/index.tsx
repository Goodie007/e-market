import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TopComponent() {
  const [showEye, setShowEye] = useState(false);

  const showBalance = () => {
    setShowEye(!showEye);
  };
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
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
          <Pressable
            onPress={showBalance}
          >
            {showEye ? (
              <Feather name="eye-off" size={24} color="#FFFFFF" />
            ) : (
              <Feather name="eye" size={24} color="#FFFFFF" />
            )}
          </Pressable>
        </View>
        <Text
          style={{
            fontSize: 24,
            color: "#FFFFFF",
            fontFamily: "Raleway-Bold",
          }}
        >
         {showEye ?  'N100,000' : '****' }
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
        >
          Transaction History
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#FFFFFF",
            fontFamily: "Raleway-Regular",
          }}
        >
          Withdraw
        </Text>
      </View>
    </View>
  );
}
