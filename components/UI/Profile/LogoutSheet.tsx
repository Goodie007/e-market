import React from "react"
import { View, Text } from "react-native"
import RBSheet from "react-native-raw-bottom-sheet"

interface LogoutProps {
  refRBSheet: any;
}

export default function LogoutSheet({refRBSheet}: LogoutProps) {
  return (
    <View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View>
          <Text>Hello</Text>
        </View>
      </RBSheet>
    </View>
  );
}
