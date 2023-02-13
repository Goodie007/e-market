import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TribeSheet from "./TribeSheet";
import * as ImagePicker from "expo-image-picker";


export default function Top() {
  const refRBSheet = useRef<any>();
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSheet = () => {
    refRBSheet.current.open()
  }

  return (
    <View
      style={{
        backgroundColor: "#063970",
        height: "45%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 150,
          width: 150,
          borderRadius: 150 / 2,
          backgroundColor: "grey",
        }}
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 150 / 2,
            }}
          />
        )}
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 125,
            top: 95,
            backgroundColor: '#FFFFFF',
            opacity: 0.8,
            width: 35,
            height: 35,
            borderRadius: 35/2,
            alignItems: 'center',
            justifyContent: 'center',
          }}
         onPress={handleSheet}>
          <Ionicons name="camera-outline" size={28} color="#063970" />
        </TouchableOpacity>
      </View>
      <TribeSheet refRBSheet={refRBSheet} setImage={setImage} />
    </View>
  );
}
