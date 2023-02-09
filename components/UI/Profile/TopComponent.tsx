import React from "react";
import { View, Text, Platform } from "react-native";

export default function TopComponent() {
  return (
    <View
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
        <View
          style={{
            width: '80%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingVertical: 25,
          }}
        >
            <Text 
                style={{
                    color: 'white',
                    fontSize: 22,
                    fontFamily: 'Raleway-Bold',
                }}
            >My Shop</Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontFamily: 'Raleway-Bold',
              }}
            >Janet Jackson</Text>
        </View>
      </View>
    </View>
  );
}
