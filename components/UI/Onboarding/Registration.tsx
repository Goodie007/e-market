import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../../constants/Button";

export default function Registration() {
    const navigation = useNavigation()

    const handleNextScreen = () => {
        navigation.navigate('Root')
    }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          paddingTop: "40%",
          paddingHorizontal: 20,
          backgroundColor: "#063970",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: "Raleway-Bold",
            fontSize: 20,
            color: "#FFFFFF",
          }}
        >
          Name
        </Text>
        <TextInput
          placeholder="oo1"
          placeholderTextColor={"blue"}
          style={{
            width: "100%",
            // borderBottomWidth: 1,
            borderColor: "#000",
            height: 52,
            fontFamily: "Raleway-Regular",
            fontSize: 16,
            paddingTop: 0,
            color: "#000",
            backgroundColor: "#FFFFFF",
            paddingHorizontal: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <Text
          style={{
            fontFamily: "Raleway-Bold",
            fontSize: 20,
            color: "#FFFFFF",
            paddingTop: 20,
          }}
        >
          Password
        </Text>
        <TextInput
          placeholder="oo1"
          placeholderTextColor={"blue"}
          secureTextEntry={true}
          style={{
            width: "100%",
            // borderBottomWidth: 1,
            borderColor: "#000",
            height: 52,
            fontFamily: "Raleway-Regular",
            fontSize: 16,
            paddingTop: 0,
            color: "#000",
            backgroundColor: "#FFFFFF",
            paddingHorizontal: 10,
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <Button
          label="Continue"
          labelStyle={{
            backgroundColor: "white",
            width: "100%",
            height: 52,
            borderRadius: 10,
            overflow: "hidden",
            fontFamily: "Raleway-Bold",
            fontSize: 20,
            alignSelf: "center",
            textAlign: "center",
            paddingVertical: 12,
            color: "#063970",
            marginTop: "20%",
          }}
          onPress={handleNextScreen}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
