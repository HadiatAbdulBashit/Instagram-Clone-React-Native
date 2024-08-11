import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import React from "react";
import { Text } from "react-native";
import { XStack } from "tamagui";

const Header = () => {
  const [fontsLoaded] = useFonts({
    StyleScript: require("../assets/fonts/StyleScript-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <XStack
      padding={10}
      backgroundColor="#fff"
      flex={1}
      alignItems="center"
      justifyContent="space-between"
      width={"100%"}
    >
      <XStack flex={1} gap={5} alignItems="center">
        <Text style={{ fontSize: 24, fontFamily: "StyleScript" }}>
          Instagram
        </Text>
        <Ionicons name="chevron-down" size={12} color="black" />
      </XStack>
      <XStack flex={1} gap={10} justifyContent="flex-end" alignItems="center">
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={20} color="black" />
      </XStack>
    </XStack>
  );
};

export default Header;
