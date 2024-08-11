import React, { useState } from "react";
import { Image } from "react-native";
import { XStack, YStack, Text, Button } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "tamagui/linear-gradient";
import moment from "moment";

interface Post {
  username: string;
  imageUrl: string;
  hasActiveStory: boolean;
  feed: Feed;
}

interface Feed {
  imageUrl: string;
  totalLikes: number;
  friendLikes: FriendLikes[];
  caption: string;
  totalComments: number;
  postDate: number;
}

interface FriendLikes {
  name: string;
  imageUrl: string;
}

interface PostProps {
  content: Post;
}

const Post: React.FC<PostProps> = ({ content }) => {
  const [showFullText, setShowFullText] = useState(false);
  const [like, setLike] = useState(false);

  const toggleTextDisplay = () => setShowFullText(!showFullText);
  const toggleLike = () => setLike(!like);

  // Conditional rendering for caption
  const captionToDisplay = showFullText
    ? content.feed.caption
    : content.feed.caption.length > 60
    ? content.feed.caption.slice(0, 60) + "..."
    : content.feed.caption;

  return (
    <YStack>
      <XStack padding={10} justifyContent="space-between">
        <XStack alignItems="center">
          <LinearGradient
            colors={content.hasActiveStory ? ["#ff8501", "#ff5851"] : ["#fff"]}
            style={{
              width: 38,
              height: 38,
              borderRadius: 19,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: content.imageUrl }}
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                borderWidth: 2,
                borderColor: "#fff",
              }}
            />
          </LinearGradient>
          <YStack>
            <Text style={{ marginLeft: 10 }}>{content.username}</Text>
            {!content.hasActiveStory && (
              <Text style={{ marginLeft: 10, fontSize: 12 }}>
                Suggest for you
              </Text>
            )}
          </YStack>
        </XStack>
        <XStack alignItems="center" gap={10}>
          {content.hasActiveStory ? (
            <Text style={{ fontSize: 12 }}>
              {moment(content.feed.postDate).fromNow()}
            </Text>
          ) : (
            <Button size="$2" theme="active">
              Follow
            </Button>
          )}
          <Button
            size="$2"
            style={{ backgroundColor: "transparent", width: 5 }}
          >
            <Ionicons name="ellipsis-vertical" size={15} color="black" />
          </Button>
        </XStack>
      </XStack>
      <Image
        source={{ uri: content.feed.imageUrl }}
        style={{ width: "100%", aspectRatio: 1 }}
      />
      <XStack padding={10} justifyContent="space-between">
        <XStack gap={5}>
          <Ionicons
            name={like ? "heart" : "heart-outline"}
            size={24}
            color={like ? "red" : "black"}
            onPress={toggleLike}
          />
          <Ionicons name="chatbubble-outline" size={24} color="black" />
          <Ionicons name="paper-plane-outline" size={24} color="black" />
          <Ionicons name="logo-whatsapp" size={24} color="black" />
        </XStack>
        <Ionicons name="bookmark-outline" size={24} color="black" />
      </XStack>
      <Text paddingHorizontal={10}>
        <strong>
          {like ? content.feed.totalLikes + 1 : content.feed.totalLikes} like
        </strong>
      </Text>
      <Text padding={10}>
        <strong>{content.username + " "}</strong>
        {captionToDisplay}
        {content.feed.caption.length > 60 && (
          <span
            onClick={toggleTextDisplay}
            style={{ padding: 0, backgroundColor: "transparent" }}
          >
            {showFullText ? " Show Less" : " Read More"}
          </span>
        )}
      </Text>
      <Text paddingHorizontal={10} paddingBottom={5} color={"#555"}>
        See all {content.feed.totalComments} comments
      </Text>
    </YStack>
  );
};

export default Post;
