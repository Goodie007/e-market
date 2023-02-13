import React, { useRef, useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

interface TribesProp {
  refRBSheet: any;
  setImage: any;
}

export default function TribeSheet({ refRBSheet, setImage }: TribesProp) {
 // const [image, setImage] = useState(null);
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

  const takeShot = async () => {
    //Ask for user permission when using camera
    const takePhoto = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    console.log(takePhoto)

    if(!takePhoto.canceled){
        setImage(takePhoto.assets[0].uri)
    }
}

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={200}
        customStyles={{
          wrapper: {
            backgroundColor: "black",
            opacity: 0.6,
            borderTopLeftRadius: 10,
            borderRadius: 10,
            overflow: "hidden",
          },
          draggableIcon: {
            backgroundColor: "transparent",
          },
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "50%",
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={pickImage}
          >
            <MaterialCommunityIcons
              name="view-gallery"
              size={50}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={takeShot}
          >
            <Feather name="camera" size={50} color="black"
             />
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
}
