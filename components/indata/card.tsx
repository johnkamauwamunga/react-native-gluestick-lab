import {
    Avatar,
    AvatarFallbackText,
    AvatarImage,
} from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

export default function FeedCard(postdata: any) {
  // Handle single or multiple images
  const postImages = postdata.posts?.imageUrl
    ? Array.isArray(postdata.posts.imageUrl)
      ? postdata.posts.imageUrl
      : [postdata.posts.imageUrl]
    : [];

  const caption = postdata.posts?.caption || "No caption";

  return (
    <Card
      className="px-0 py-3 mx-0 bg-white mb-4" // no side padding, no side margins
      style={{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#e5e7eb", // gray-200
        borderRadius: 0, // remove rounded corners for a full-width separator
        shadowOpacity: 0, // optional: remove shadow for cleaner look
        elevation: 0,
      }}
    >
      {/* --- Header: Avatar, Name, Handle + three dots --- */}
      <Box className="flex-row items-center px-4">
        {" "}
        {/* add horizontal padding only inside */}
        <Avatar size="md" className="mr-3">
          <AvatarFallbackText>
            {postdata.name?.charAt(0) || "U"}
          </AvatarFallbackText>
          <AvatarImage source={{ uri: postdata.image }} />
        </Avatar>
        <VStack className="flex-1">
          <Heading size="sm" className="font-semibold">
            {postdata.name}
          </Heading>
          <Text size="xs" className="text-gray-500">
            {postdata.handle}
          </Text>
        </VStack>
        {/* Three dots menu icon */}
        <Text className="text-xl font-bold text-gray-600 px-2">⋮</Text>
      </Box>

      {/* --- Caption with "read more" and hashtags --- */}
      <Box className="mt-2 px-4">
        <Text size="sm" className="leading-5">
          {caption}
          <Text className="text-blue-500"> …read more</Text>
        </Text>
        <Text size="xs" className="text-blue-500 mt-1">
          #landscape #flora #nature
        </Text>
      </Box>

      {/* --- Images --- */}
      <Box className="mt-3 h-64 w-full overflow-hidden">
        {postImages.length === 1 ? (
          <Image
            source={{ uri: postImages[0] }}
            className="w-full h-full"
            alt="post image"
            resizeMode="cover"
          />
        ) : postImages.length > 1 ? (
          <Box className="flex-row h-full gap-1">
            {postImages.map((url: string, index: number) => (
              <Image
                key={index}
                source={{ uri: url }}
                className={`flex-1 h-full ${index > 0 ? "w-1/3" : "w-1/2"}`}
                alt={`post image ${index + 1}`}
                resizeMode="cover"
              />
            ))}
          </Box>
        ) : (
          <Box className="w-full h-full bg-gray-200 items-center justify-center">
            <Text size="sm">No image</Text>
          </Box>
        )}
      </Box>

      {/* --- Stats row: likes, comments, followers --- */}
      <Box className="flex-row justify-between items-center mt-3 pt-2 border-t border-gray-100 px-4">
        <Box className="flex-row items-center space-x-3">
          <Box className="flex-row items-center">
            <Text className="text-red-500 mr-1">❤️</Text>
            <Text size="sm" className="font-semibold">
              {postdata.stats?.likes || "1.6k"}
            </Text>
          </Box>
          <Box className="flex-row items-center">
            <Text className="text-gray-600 mr-1">💬</Text>
            <Text size="sm" className="font-semibold">
              {postdata.stats?.comments || "2.3k"}
            </Text>
          </Box>
        </Box>
        <Box className="flex-row items-center">
          <Text className="text-gray-600 mr-1">👥</Text>
          <Text size="sm" className="font-semibold">
            {postdata.stats?.followers || "184.3K"} Followers
          </Text>
        </Box>
      </Box>

      {/* --- Follow button (full width, below separator) --- */}
      <Box className="mt-3 px-4">
        {" "}
        {/* add padding for the button */}
        <Button className="py-2 px-4 rounded-xl bg-blue-500 w-full">
          <ButtonText size="sm" className="text-white font-semibold">
            Follow
          </ButtonText>
        </Button>
      </Box>
    </Card>
  );
}
