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
import { Share2, UserPlus } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const user = {
  name: "lucy chen",
  handle: "@lucychen",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  bio: "Full-stack developer | React Native enthusiast | Coffee addict ☕",
  stats: {
    posts: 42,
    followers: 1200,
    following: 340,
  },
};

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HStack className=" bg-white pt-2 px-4">
        <Avatar size="2xl">
          <AvatarFallbackText>{user.name}</AvatarFallbackText>
          <AvatarImage source={{ uri: user.avatar }} />
        </Avatar>

        <VStack className="flex-1 pl-6 pt-3">
          <Text className="color-slate-950 font-semibold text-2xl">
            {user.name}
          </Text>
          <Text className="color-gray-600 font-light text-base">
            {user.handle}
          </Text>
          <Box className="pt-4">
            <Button className="bg-red-700 rounded-xl">
              <Text className="color-white font-medium">Edit Profile</Text>
            </Button>
          </Box>
        </VStack>
      </HStack>
      {/* profile and the followers */}
      <VStack>
        <Box className="bg-white rounded-md mt-3 py-2 px-3">
          <Text className="color-slate-600 font-space-mono text-base">
            {user.bio}
          </Text>
        </Box>
        <Box>
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
        </Box>
        <HStack className="mt-3 flex-1 justify-between px-3 pt-3">
          <Button className="flex-1 bg-blue-600 rounded-xl mr-2">
            <UserPlus size={20} color="#fff" strokeWidth={1.5} />
            <ButtonText className="ml-2 text-white">Follow</ButtonText>
          </Button>
          <Button className="flex-1 bg-gray-200 rounded-xl">
            <Share2 size={20} color="#1e293b" strokeWidth={1.5} />
            <ButtonText className="ml-2 text-slate-800">Share</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
