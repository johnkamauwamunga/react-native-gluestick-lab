import { Bookmark, HeartIcon } from "lucide-react-native";
import React from "react";
import {
    Avatar,
    AvatarFallbackText,
    AvatarGroup,
    AvatarImage,
} from "../ui/avatar";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
import { Image } from "../ui/image";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

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

interface EventProp {
  event: Event;
}

const EventComponent: React.FC<EventProp> = ({ event }) => {
  const attendingAvatars = Object.values(event.attending);
  return (
    <Box
      className="flex-1 mb-2 h-36 border-gray-200 bg-white rounded-xl mx-1"
      style={{
        borderWidth: 1,
        elevation: 3,
        shadowColor: "#1A1A2E",
        shadowOpacity: 0.1,
      }}
    >
      <HStack className="px-3 py-2 w-full ">
        <Box className="h-full aspect-square">
          <Image
            source={{ uri: event.bannerImage }}
            alt={event.name}
            className="h-full w-full rounded-xl"
            resizeMode="cover"
          />

          <HStack className="bg-red-600 absolute gap-2 rounded-full px-2 py-1 bottom-1 left-1 ">
            <HeartIcon size={15} color="white" />
            <Text className="color-white text-xs">{event.type}</Text>
          </HStack>
        </Box>

        <VStack className="pl-4  flex-1 justify-between py-2">
          {/* event name */}
          <HStack className="justify-between items-center">
            <Text className="text-base font-semibold color-black">
              {event.name}
            </Text>
            <Bookmark size={18} color="blue" strokeWidth={1.5} />
          </HStack>

          <Text className="text-sm font-medium color-slate-500">
            {event.venue}
          </Text>
          <Text className="text-sm font-medium color-slate-500">
            {event.date} . {event.time}
          </Text>
          <HStack className=" items-center gap-3">
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
            <Text className="text-md font-medium">
              {event.numOfAttending} going
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default EventComponent;
