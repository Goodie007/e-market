import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";

const pexel = require("../../../assets/images/pexel.jpg");
const two = require("../../../assets/images/pexel2.jpg");
const three = require("../../../assets/images/pexel3.jpg");
const four = require("../../../assets/images/pexel4.jpg");
const five = require("../../../assets/images/pexel.jpg");

type ItemsProps = {
  id: string;
  messageText: string;
  messageTime: string;
  userName: string;
  userImg: string;
};

export default function MessageComponent() {
  const navigation = useNavigation();

  const handleChange = () => {
    navigation.navigate("Message");
  }

  const Data = [
    {
      id: "0",
      userName: "John Doe",
      userImg: pexel,
      messageTime: "4:30pm",
      messageText: "hey there, hello world",
    },
    {
      id: "1",
      userName: "Jane Doe",
      userImg: two,
      messageTime: "5:00pm",
      messageText: "hey there, hello world",
    },
    {
      id: "2",
      userName: "Johny Doe",
      userImg: three,
      messageTime: "5:10pm",
      messageText: "hey there, hello world",
    },
    {
      id: "3",
      userName: "James Doe",
      userImg: four,
      messageTime: "5:20pm",
      messageText: "hey there, hello world",
    },
    {
      id: "4",
      userName: "Ok Doe",
      userImg: five,
      messageTime: "5:30pm",
      messageText: "hey there, hello world",
    },
    {
      id: "5",
      userName: "Jon Doe",
      userImg: pexel,
      messageTime: "5:35pm",
      messageText: "hey there, hello world",
    },
  ];

  const Items = ({
    id,
    userImg,
    messageTime,
    messageText,
    userName,
  }: ItemsProps) => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            //alignItems: "center",
            marginVertical: 8,
            paddingVertical: 3,
            //borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              //justifyContent: "space-between",
              alignItems: "center",
              width: "70%",
            }}
          >
            <Image
              source={userImg}
              style={{
                width: 70,
                height: 70,
                borderRadius: 70 / 2,
              }}
            />
            <View
              style={{
                //flexDirection: "row",
                justifyContent: "space-between",
                //alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "86%",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Raleway-Bold",
                    fontSize: 18,
                  }}
                >
                  {userName}
                </Text>
                <Text>{messageTime}</Text>
              </View>
              <Text
                style={{
                  fontFamily: "Raleway-Bold",
                  fontSize: 14,
                }}
              >
                {messageText}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        paddingTop: 16,
      }}
    >
      <FlatList
        data={Data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={handleChange}
            >
              <Items
                id={""}
                messageText={item.messageText}
                messageTime={item.messageTime}
                userName={item.userName}
                userImg={item.userImg}
              />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
