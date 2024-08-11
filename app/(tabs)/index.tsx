import { ScrollView, YStack } from "tamagui";
import Header from "@/components/Header";
import Post from "@/components/Post";
import Feeds from "@/assets/Feeds";

export default function HomeScreen() {
  console.log(Feeds);

  return (
    <YStack>
      <Header />
      <ScrollView>
        <Post />
        <Post />
      </ScrollView>
    </YStack>
  );
}
