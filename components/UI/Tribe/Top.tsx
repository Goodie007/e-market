import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';


export default function Top() {
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

  return (
    <View
      style={{
        backgroundColor: "#063970",
        height: "45%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
      }}
    >
      <View
        style={{
            height: 150,
            width: 150,
            borderRadius: 150/2,
            backgroundColor: 'white',
        }}
      >
      {image && <Image source={{ uri: image }} 
      style={{ 
        width: 150, 
        height: 150,
        borderRadius: 150/2,
         }} />
        }
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      </View>
    </View>
  );
}
