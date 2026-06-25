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
  // Assume postdata.posts can be:
  // - an object with imageUrl (string)
  // - or an array of image URLs (string[])
  const postImages = postdata.posts?.imageUrl
    ? Array.isArray(postdata.posts.imageUrl)
      ? postdata.posts.imageUrl
      : [postdata.posts.imageUrl]
    : [];

  return (
    <Card className="p-6 rounded-lg w-97 m-3">
      {/* Header with Avatar */}
      <Box className="flex-row">
        <Avatar size="xl" className="mr-4">
          <AvatarFallbackText>
            {postdata.name?.charAt(0) || "U"}
          </AvatarFallbackText>
          <AvatarImage
            source={{
              uri: postdata.image, // ✅ fixed syntax
            }}
          />
        </Avatar>
        <VStack>
          <Heading size="lg" className="mb-1">
            {postdata.name}
          </Heading>
          <Text size="md">{postdata.handle}</Text>
        </VStack>
      </Box>

      {/* Stats */}
      <Box className="flex-row p-y3">
        <VStack className="items-center flex-1 pb-0 border-r border-border/70">
          <Heading size="md">{postdata.stats?.posts}</Heading>
          <Text size="sm">posts</Text>
        </VStack>
        <VStack className="items-center flex-1 py-0 border-r border-border/70">
          <Heading size="md">{postdata.stats?.followers}</Heading>
          <Text size="sm">followers</Text>
        </VStack>
        <VStack className="items-center flex-1 pt-0">
          <Heading size="md">{postdata.stats?.following}</Heading>
          <Text size="sm">following</Text>
        </VStack>
      </Box>

      {/* Images – conditional layout */}
      <Box className="flex-row items-center justify-center h-80">
        {postImages.length === 1 ? (
          // One image → full width
          <Image
            source={{ uri: postImages[0] }}
            className="rounded-md w-full h-full"
            alt="post image"
            resizeMode="cover"
          />
        ) : postImages.length > 1 ? (
          // Multiple images → share space (here we split equally)
          postImages.map((url: string, index: any) => (
            <Image
              key={index}
              source={{ uri: url }}
              className={`rounded-md h-full ${index === 0 ? "mr-1" : "ml-1"} w-1/2`}
              alt={`post image ${index + 1}`}
              resizeMode="cover"
            />
          ))
        ) : (
          // No image – optional placeholder
          <Box className="w-full h-full bg-gray-200 rounded-md items-center justify-center">
            <Text>No image</Text>
          </Box>
        )}
      </Box>

      <Button className="py-2 px-4 rounded-xl">
        <ButtonText size="sm">Follow</ButtonText>
      </Button>
    </Card>
  );
}
