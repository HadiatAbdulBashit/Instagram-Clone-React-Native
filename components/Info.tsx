import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { XStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

const Info = () => {
  return (
    <XStack
      paddingHorizontal={10}
      backgroundColor="#fff"
      flex={1}
      gap={5}
      width={"100%"}
      alignItems="center"
      paddingVertical={20}
    >
      <LinearGradient
        colors={["#920a9e", "#c00202", "#f5f104"]}
        style={{
          borderRadius: 38,
          margin: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons
          name="checkmark-circle-outline"
          size={24}
          color="white"
          style={{ marginVertical: -1 }}
        />
      </LinearGradient>
      <Text style={{ fontSize: 12 }}>
        You've seen all new post from the past 3 days from account you follow.
      </Text>
    </XStack>
  );
};

export default Info;
