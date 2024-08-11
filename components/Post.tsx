import React from "react";
import { Image } from "react-native";
import { XStack, YStack, Text } from "tamagui";
import { Ionicons } from "@expo/vector-icons";

const Post = () => {
  return (
    <YStack padding={10} borderBottomWidth={1} borderColor="#ddd">
      <XStack alignItems="center">
        <Image
          source={{ uri: "https://example.com/user-profile.jpg" }}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <Text style={{ marginLeft: 10 }}>username</Text>
      </XStack>
      <Image
        source={{ uri: "https://example.com/post-image.jpg" }}
        style={{ width: "100%", height: 300, marginTop: 10 }}
      />
      <XStack paddingTop={10}>
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          color="black"
          style={{ marginLeft: 20 }}
        />
      </XStack>
      <Text paddingTop={10}>Description of the post...</Text>
    </YStack>
  );
};

export default Post;
