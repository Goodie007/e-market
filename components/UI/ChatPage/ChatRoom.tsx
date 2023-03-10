import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default function ChatRoom() {
  const [messages, setMessages] = useState<any>([]);
  const navigation = useNavigation();

  useEffect(() => {
    setMessages([
      {
        _id: "1",
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: "2",
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages: never[] | undefined) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        isTyping={true}
        loadEarlier={true}
        //renderBubble={renderBubble}
      />
    </>
  );
}
