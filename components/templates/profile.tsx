import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
} from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
// ✅ Use lucide-react-native instead of lucide-react
import { Heart, Share2, UserPlus } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ---------- DATA (separated from UI) ----------
const user = {
  name: "John Kamau",
  handle: "@caisykhalif",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  bio: "Full-stack developer | React Native enthusiast | Coffee addict ☕",
  stats: {
    posts: 42,
    followers: 1200,
    following: 340,
  },
};

// ---------- MAIN SCREEN ----------
export default function HomeScreen() {
  const handleEditProfile = () => {
    console.log("Edit profile pressed");
  };

  const handleShare = () => {
    console.log("Share profile");
  };

  const handleFollow = () => {
    console.log("Follow user");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Box className="flex-1 px-4 py-6">
        {/* -------- Profile Header -------- */}
        <HStack space="md" className="items-center">
          <Avatar size="2xl">
            <AvatarFallbackText>{user.name}</AvatarFallbackText>
            <AvatarImage source={{ uri: user.avatar }} />
          </Avatar>

          <VStack space="sm" className="flex-1">
            <Box>
              <Text className="font-bold text-slate-950 text-2xl">
                {user.name}
              </Text>
              <Text className="font-medium text-gray-500 text-base">
                {user.handle}
              </Text>
            </Box>

            <Button
              className="bg-red-600 rounded-xl w-full"
              onPress={handleEditProfile}
            >
              <ButtonText className="text-white">Edit Profile</ButtonText>
            </Button>
          </VStack>
        </HStack>

        {/* -------- Bio -------- */}
        <Box className="mt-4">
          <Text className="text-gray-700 text-base leading-6">{user.bio}</Text>
        </Box>

        {/* -------- Stats -------- */}
        <HStack
          space="xl"
          className="mt-6 justify-around bg-gray-50 py-4 px-2 rounded-2xl"
        >
          <VStack className="items-center">
            <Text className="font-bold text-xl text-slate-950">
              {user.stats.posts}
            </Text>
            <Text className="text-gray-500 text-sm">Posts</Text>
          </VStack>
          <VStack className="items-center">
            <Text className="font-bold text-xl text-slate-950">
              {user.stats.followers}
            </Text>
            <Text className="text-gray-500 text-sm">Followers</Text>
          </VStack>
          <VStack className="items-center">
            <Text className="font-bold text-xl text-slate-950">
              {user.stats.following}
            </Text>
            <Text className="text-gray-500 text-sm">Following</Text>
          </VStack>
        </HStack>

        {/* -------- Action Buttons -------- */}
        <HStack space="md" className="mt-6">
          <Button
            className="flex-1 bg-blue-600 rounded-xl"
            onPress={handleFollow}
          >
            <UserPlus size={20} color="#fff" strokeWidth={1.5} />
            <ButtonText className="ml-2 text-white">Follow</ButtonText>
          </Button>
          <Button
            className="flex-1 bg-gray-200 rounded-xl"
            onPress={handleShare}
          >
            <Share2 size={20} color="#1e293b" strokeWidth={1.5} />
            <ButtonText className="ml-2 text-slate-800">Share</ButtonText>
          </Button>
        </HStack>

        {/* -------- Extra: Favorite (demo) -------- */}
        <HStack space="sm" className="mt-8 items-center">
          <Heart color="#dc2626" size={28} strokeWidth={1.5} />
          <Text className="text-red-600 font-medium">Favorite</Text>
        </HStack>
      </Box>
    </SafeAreaView>
  );
}
