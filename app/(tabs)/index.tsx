import { ScrollView, YStack } from "tamagui";
import Header from "@/components/Header";
import Post from "@/components/Post";
import Feeds from "@/assets/Feeds";
import StoryData from "@/assets/Story";
import Story from "@/components/Story";

export default function HomeScreen() {
  console.log(Feeds);

  return (
    <YStack>
      <Header />
      <ScrollView>
        <Story stories={StoryData} />
        <Post />
        <Post />
      </ScrollView>
    </YStack>
  );
}
