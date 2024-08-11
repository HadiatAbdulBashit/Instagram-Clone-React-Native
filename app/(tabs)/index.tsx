import { ScrollView, YStack } from "tamagui";
import Header from "@/components/Header";
import Post from "@/components/Post";
import Feeds from "@/assets/Feeds";
import StoryData from "@/assets/Story";
import Story from "@/components/Story";
import Info from "@/components/Info";
import Suggest from "@/components/Suggest";

export default function HomeScreen() {
  return (
    <YStack flex={1} backgroundColor={"#fff"}>
      <Header />
      <ScrollView flex={1}>
        <Story stories={StoryData} />
        <Info />
        <Suggest />
        {Feeds.map((feed, index) => (
          <Post content={feed} key={index} />
        ))}
      </ScrollView>
    </YStack>
  );
}
