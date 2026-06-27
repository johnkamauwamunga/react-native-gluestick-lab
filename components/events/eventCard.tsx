import {
    Avatar,
    AvatarFallbackText,
    AvatarGroup,
    AvatarImage,
} from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Bookmark } from "lucide-react-native";
import React from "react";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

const event = {
  id: 1,
  name: "Samsons Wedding",
  venue: "St Peters ACK",
  type: "Wedding",
  date: "24 June 2024",
  time: "11:00 AM",
  numOfAttending: "80",
  bannerImage:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/ecom/boseheadphones.jpg",
  price: 249.99,
  attending: {
    user1:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    user2:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    user3:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
};

const EventCard = () => {
  const attendingAvatars = Object.values(event.attending);

  return (
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
        {/* Image container – fixed width and height, rounded corners */}
        <Box className="w-[30%] aspect-square rounded-xl overflow-hidden bg-gray-100">
          <Image
            source={{ uri: event.bannerImage }}
            resizeMode="cover"
            className="w-full h-full"
            alt={event.name}
          />
        </Box>

        {/* Right side content */}
        <VStack className="flex-1 justify-between py-0.5">
          {/* Header: title + bookmark */}
          <HStack className="justify-between items-start">
            <Text
              className="text-lg font-bold text-gray-800 flex-1 mr-2"
              numberOfLines={2} // prevents title from overflowing
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
  );
};

export default EventCard;
