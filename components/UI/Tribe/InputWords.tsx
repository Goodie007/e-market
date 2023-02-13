import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TextInput } from "react-native";
import Button from "../../constants/Button";

export default function InputWords() {
    const navigation = useNavigation()
  return (
    <View
      style={{
        paddingTop: "10%",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          color: "#000",
          fontFamily: "Raleway-Bold",
          fontSize: 18,
        }}
      >
        Information
      </Text>
      <View
        style={{
            paddingTop: 20,
        }}
      >
        <Text>info</Text>
        <TextInput
          placeholder="oo1"
          style={{
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "#000",
            height: 40,
            fontFamily: 'Raleway-Regular',
            fontSize: 16,
            paddingTop: 0,
            // backgroundColor: 'blue'
          }}
        />
      </View>
      <Button 
         label="Continue"
         labelStyle={{
             backgroundColor: '#063970',
             width: '100%',
             height: 52,
             borderRadius: 10,
             overflow: 'hidden',
             fontFamily: 'Raleway-Bold',
             fontSize: 20,
             alignSelf: 'center',
             textAlign: 'center',
             paddingVertical: 12,
             color: 'white',
             marginTop: '20%',

         }}
        onPress={() => {
            navigation.navigate('ChatRoom')
        }} />
    </View>
  );
}
