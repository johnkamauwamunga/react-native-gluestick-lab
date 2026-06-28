import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Heart, Share2, Users } from "lucide-react-native";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";

import events from "@/assets/images/data/events.json";

const { width } = Dimensions.get("window");

export default function EventDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  // Find the event by id (convert to number because params are strings)
  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <Text className="text-lg text-gray-500">Event not found</Text>
      </View>
    );
  }

  // Handlers for the action buttons
  const handleGoing = () => console.log("Going", event.id);
  const handleInterested = () => console.log("Interested", event.id);
  const handleShare = () => {
    // Implement share logic using Expo's Sharing API or WebBrowser
    console.log("Share", event.id);
  };

  return (
    <ScrollView className="flex-1 bg-black">
      {/* Back button and banner */}
      <Box style={{ width, height: 300 }} className="relative">
        <Image
          source={{ uri: event.bannerImage }}
          resizeMode="cover"
          className="w-full h-full"
          alt={event.name}
        />
        {/* Back button overlay */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-8 left-4 bg-black/50 p-2 rounded-full"
        >
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
      </Box>

      {/* Main info card – pulled up with rounded corners */}
      <Box
        className="bg-white rounded-t-[40px] -mt-8 px-5 py-6"
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
      >
        <VStack space="sm">
          <Text className="text-2xl font-bold text-gray-800">{event.name}</Text>
          <Text className="text-base text-gray-500">{event.venue}</Text>
          <Text className="text-sm text-gray-400">
            {event.date} · {event.time}
          </Text>
          <Text className="text-sm font-medium text-gray-600">
            {event.numOfAttending} people going
          </Text>
          {event.price > 0 && (
            <Text className="text-lg font-bold text-rose-500">
              ${event.price}
            </Text>
          )}
        </VStack>

        {/* Horizontal action buttons */}
        <HStack className="justify-around mt-6 pb-4 border-b border-gray-200">
          <Button
            onPress={handleGoing}
            className="flex-1 mx-1 bg-blue-500 rounded-full py-3"
          >
            <Users size={20} color="white" />
            <ButtonText className="ml-2 text-white font-semibold">
              Going
            </ButtonText>
          </Button>
          <Button
            onPress={handleInterested}
            className="flex-1 mx-1 bg-rose-500 rounded-full py-3"
          >
            <Heart size={20} color="white" />
            <ButtonText className="ml-2 text-white font-semibold">
              Interested
            </ButtonText>
          </Button>
          <Button
            onPress={handleShare}
            className="flex-1 mx-1 bg-gray-200 rounded-full py-3"
          >
            <Share2 size={20} color="gray" />
            <ButtonText className="ml-2 text-gray-700 font-semibold">
              Share
            </ButtonText>
          </Button>
        </HStack>

        {/* Optional: Attendees list, description, etc. */}
        <VStack className="mt-4">
          <Text className="text-lg font-semibold text-gray-800">Attendees</Text>
          {/* Render avatars or a list here */}
        </VStack>
      </Box>
    </ScrollView>
  );
}
