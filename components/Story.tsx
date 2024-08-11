import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text } from "react-native";
import { ScrollView, XStack, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

interface Story {
  id: number;
  username: string;
  image: string;
}

interface StoryProps {
  stories: Story[];
}

const Story: React.FC<StoryProps> = ({ stories }) => {
  return (
    <XStack paddingVertical={10}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <YStack alignItems="center" marginHorizontal={10}>
          <LinearGradient
            colors={["#fff", "#fff"]}
            style={{
              width: 76,
              height: 76,
              borderRadius: 38,
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "visible",
            }}
          >
            <Image
              source={{ uri: stories[0].image }}
              style={{
                width: 72,
                height: 72,
                borderRadius: 36,
                borderWidth: 2,
                borderColor: "#fff",
              }}
            />
            <YStack
              style={{
                position: "absolute",
                bottom: 4,
                right: 4,
                backgroundColor: "#fff",
                borderRadius: 40,
              }}
            >
              <Ionicons
                name="add-circle"
                size={24}
                color="#4694f8"
                style={{ marginVertical: -1 }}
              />
            </YStack>
          </LinearGradient>
          <Text style={{ marginTop: 5, fontSize: 12 }}>Your Story</Text>
        </YStack>
        {stories.map((story) => (
          <YStack key={story.id} alignItems="center" marginRight={10}>
            <LinearGradient
              colors={["#ff8501", "#ff5851"]}
              style={{
                width: 76,
                height: 76,
                borderRadius: 38,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{ uri: story.image }}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 36,
                  borderWidth: 2,
                  borderColor: "#fff",
                }}
              />
            </LinearGradient>
            <Text style={{ marginTop: 5, fontSize: 12 }}>{story.username}</Text>
          </YStack>
        ))}
      </ScrollView>
    </XStack>
  );
};

export default Story;
