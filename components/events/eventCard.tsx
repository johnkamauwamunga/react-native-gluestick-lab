import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { useRouter } from "expo-router";
import { Bookmark, Heart } from "lucide-react-native";
import React from "react";
import { Pressable } from "react-native";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

// Define the Event interface
export interface Event {
  id: number;
  name: string;
  venue: string;
  type: string;
  date: string;
  time: string;
  numOfAttending: string;
  bannerImage: string;
  price: number;
  attending: {
    [key: string]: string;
  };
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const attendingAvatars = Object.values(event.attending);

  const routes = useRouter();

  const navigateToSingle = () => {
    routes.push(`/articles/${event.id}`);
  };

  return (
    <Pressable onPress={navigateToSingle}>
      <Card
        className="p-3 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md"
        style={{
          shadowColor: "#1A1A2E",
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 3,
        }}
      >
        <HStack className="items-stretch gap-3">
          {/* Image container with banner */}
          <Box className="w-[30%] aspect-square rounded-xl overflow-hidden bg-gray-100 relative">
            <Image
              source={{ uri: event.bannerImage }}
              resizeMode="cover"
              className="w-full h-full"
              alt={event.name}
            />
            {/* Rose‑red type banner */}
            <Box className="absolute bottom-2 left-2 bg-rose-500 rounded-full px-2 py-0.5 flex-row items-center">
              <Heart size={12} color="white" fill="white" />
              <Text className="text-white text-xs font-medium ml-1">
                {event.type}
              </Text>
            </Box>
          </Box>

          {/* Right side content */}
          <VStack className="flex-1 justify-between py-0.5">
            {/* Header: title + bookmark */}
            <HStack className="justify-between items-start">
              <Text
                className="text-lg font-bold text-gray-800 flex-1 mr-2"
                numberOfLines={2}
              >
                {event.name}
              </Text>
              <Bookmark size={18} color="#3b82f6" strokeWidth={1.5} />
            </HStack>

            {/* Venue */}
            <Text className="text-sm text-gray-500 mt-0.5">{event.venue}</Text>

            {/* Date & time */}
            <Text className="text-sm font-medium text-gray-400">
              {event.date} · {event.time}
            </Text>

            {/* Attendees */}
            <HStack className="items-center mt-1">
              <AvatarGroup className="flex-row">
                {attendingAvatars.map((uri, index) => (
                  <Avatar
                    key={index}
                    size="sm"
                    className={index > 0 ? "-ml-2" : ""}
                  >
                    <AvatarFallbackText>U</AvatarFallbackText>
                    <AvatarImage source={{ uri }} />
                  </Avatar>
                ))}
              </AvatarGroup>
              <Text className="text-sm font-semibold text-gray-700 ml-2">
                {event.numOfAttending} going
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </Card>
    </Pressable>
  );
};

export default EventCard;
