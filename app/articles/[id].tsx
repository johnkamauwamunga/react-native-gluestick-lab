import events from "@/assets/images/data/events.json";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ArrowLeft, Calendar, Users, Verified } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ArticleDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const eventDetail = events.find((e) => e.id === Number(id));
  const routes = useRouter();

  return (
    <Box className="flex-1 bg-blue-500">
      <Box className="w-full h-[30%] bg-red-500">
        <Image
          source={{ uri: eventDetail?.bannerImage }}
          resizeMode="cover"
          className="w-full h-full"
          alt={eventDetail?.name}
        />

        <TouchableOpacity
          onPress={() => routes.back()}
          className="absolute top-8 left-4 bg-black/50 p-2 rounded-full"
        >
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
      </Box>
      <Box
        className=" flex-1 bg-white"
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <Box className="px-4 py-2">
          <Box className="bg-red-600 rounded-xl p-1 w-[20%]">
            <Text className=" text-sm font-inter color-slate-50">
              {eventDetail?.type}
            </Text>
          </Box>

          <Text className="text-lg font-bold color-black">
            {eventDetail?.name} . {eventDetail?.venue}
          </Text>
          <HStack className="gap-2">
            <Avatar>
              <AvatarFallbackText>{eventDetail?.name}</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
                }}
              />
            </Avatar>
            <Text className="text-base font-semibold color-slate-900">
              Hosted by John Kamau
            </Text>
            <Verified size={18} color="blye" />
          </HStack>
          <HStack>
            <Calendar size={16} color="black" />
            <Text>
              {eventDetail?.date} . {eventDetail?.time}
            </Text>
          </HStack>

          <HStack>
            <Users size={18} color="black" />
            <Text className="color-black font-inter text-sm">
              {eventDetail?.numOfAttending} going
            </Text>
          </HStack>
          <HStack>
            <Button className="bg-green-600 rounded-xl shadow-green-500">
              <ButtonText className="text-white font-semibold">
                Going
              </ButtonText>
            </Button>

            <Button className="border-gray-600 rounded-xl bg-white">
              <ButtonText className="text-black font-semibold">
                Interested
              </ButtonText>
            </Button>
            <Button className="border-gray-600 rounded-xl bg-white">
              <ButtonText className="text-black font-semibold"></ButtonText>
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleDetail;
