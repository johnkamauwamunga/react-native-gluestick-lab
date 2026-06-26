import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

export default function FeedCard() {
  return (
    <Card
      className="w-70"
      style={{
        borderColor: "#e5e7eb",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        elevation: 0,
        borderRadius: 3,
        shadowOpacity: 0,
      }}
    >
      <Box className="flex-row w-96">
        <Avatar size="lg">
          <AvatarFallbackText>U</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>

        <HStack className="w-full justify-between">
          <VStack className="pl-6 py-2">
            <Text className="color-slate-900 text-md font-semibold">
              Gerry chen
            </Text>
            <Text className="color-gray-600 text-sm font-medium">
              @gerrychen
            </Text>
          </VStack>

          <Text className="text-xl font-bold text-gray-600 px-2 ">⋮</Text>
        </HStack>
      </Box>
      <Box className="mt-3 h-64 w-full overflow-hidden">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
          className="w-full h-full rounded-lg"
          alt="post image"
          resizeMode="cover"
        />
      </Box>
      <Box className="flex-row justify-between px-4">
        <Box className="gap-4 flex-row">
          <Box className="flex-row gap-1">
            <Text className="text-red-500 mr-1">❤️</Text>
            <Text>{"1.6K"}</Text>
          </Box>

          <Box className="flex-row gap-1">
            <Text className="text-gray-600 mr-1">💬</Text>
            <Text>{"2.3K"}</Text>
          </Box>
        </Box>

        <Box className="flex-row gap-1">
          <Text className="text-gray-600 mr-1">👥</Text>
          <Text>Follow</Text>
        </Box>
      </Box>
    </Card>
  );
}
