import { ScrollView, YStack } from "tamagui";
import Header from "@/components/Header";
import Post from "@/components/Post";
import Feeds from "@/assets/Feeds";
import StoryData from "@/assets/Story";
import Story from "@/components/Story";
import Info from "@/components/Info";
import Suggest from "@/components/Suggest";

export default function HomeScreen() {
  console.log(Feeds);

  return (
    <YStack>
      <Header />
      <ScrollView>
        <Story stories={StoryData} />
        <Info />
        <Suggest />
        <Post />
        <Post />
      </ScrollView>
    </YStack>
  );
}
