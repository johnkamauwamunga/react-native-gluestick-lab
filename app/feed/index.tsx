import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Posts from "../../assets/images/data/posts.json";
import FeedCard from "./card";
export default function Feed() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsHorizontalScrollIndicator={false}>
        {Posts.map((post) => (
          <FeedCard key={post.handle} {...post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
