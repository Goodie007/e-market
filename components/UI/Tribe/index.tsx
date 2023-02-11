import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Button from "../../constants/Button";

export default function Tribe() {
    const navigation = useNavigation()

    const handleChange = () => {
        navigation.navigate('InputPage')
    }
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#063970",
        height: "100%",
      }}
    >
      <View
        style={{
            paddingHorizontal: 20,
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            paddingVertical: 40,
        }}
      >
        <View
          style={{
            //paddingTop: "10%",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '65%',
          }}
        >
          <AntDesign name="arrowleft" size={24} color={"white"} />
          <Text
            style={{
                textAlign: 'center',
                color: 'white',
                fontFamily: 'Raleway-Regular',
                fontSize: 18,
            }}
          >Works Well</Text>
        </View>
        <View>
            <Text
                style={{
                    color: 'white',
                    
                }}
            >hehbibaj.fblajd va ;jd vlj vyhbJA H AJ. VA.LJ V;BAIUJD </Text>
        </View>
        <Button
            label="Continue"
            labelStyle={{
                backgroundColor: 'white',
                width: '100%',
                height: 52,
                borderRadius: 10,
                overflow: 'hidden',
                fontFamily: 'Raleway-Bold',
                fontSize: 20,
                alignSelf: 'center',
                textAlign: 'center',
                paddingVertical: 12,
                color: '#063970'

            }}
         onPress={handleChange} />
      </View>
    </SafeAreaView>
  );
}
