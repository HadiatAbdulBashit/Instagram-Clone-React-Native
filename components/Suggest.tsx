import { Text } from "react-native";
import { XStack } from "tamagui";

const Suggest = () => {
  return (
    <XStack
      paddingHorizontal={10}
      backgroundColor="#fff"
      flex={1}
      gap={5}
      width={"100%"}
      alignItems="center"
      justifyContent="space-between"
      paddingBottom={20}
    >
      <Text style={{ fontSize: 16 }}>Suggested for you</Text>
      <Text style={{ fontSize: 12, color: "#4694f8" }}>Older posts</Text>
    </XStack>
  );
};

export default Suggest;
