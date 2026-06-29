import events from "@/assets/images/data/events.json";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ArrowLeft,
  Calendar,
  Check,
  Share2,
  Star,
  Users,
  Verified,
} from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const weddingDesc = {
  desc: "Join Us as we celebrate love and unity. Your Presence will make it en more special. come one come all.once, Join Us as we celebrate love and unity. Your Presence will make it en more special. come one come all",
};

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
        <Box className="px-4 pt-3">
          <Box className="justify-between">
            <Box className="bg-red-600 rounded-xl p-1 w-[20%]  items-center justify-center">
              <Text className="text-sm font-inter color-slate-50">
                {eventDetail?.type}
              </Text>
            </Box>

            <Text className="text-lg font-bold color-black">
              {eventDetail?.name} . {eventDetail?.venue}
            </Text>
            <HStack className="gap-2 py-2 items-center">
              <Avatar>
                <AvatarFallbackText>{eventDetail?.name}</AvatarFallbackText>
                <AvatarImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
                  }}
                />
              </Avatar>
              <Text className="text-base font-semibold color-slate-600">
                Hosted by John Kamau
              </Text>
              <Verified size={18} color="blye" />
            </HStack>
            <HStack className="gap-2 py-2">
              <Calendar size={16} color="gray" />
              <Text>
                {eventDetail?.date} . {eventDetail?.time}
              </Text>
            </HStack>

            <HStack className="py-2 w-1/2 justify-between">
              <Box className="flex-row gap-4">
                <Users size={18} color="gray" />
                <Text className="color-slate-800 font-semibold text-sm">
                  {eventDetail?.numOfAttending} going
                </Text>
              </Box>

              <Box>
                <Text className="color-slate-600 text-base">
                  . 80 Interested
                </Text>
              </Box>
            </HStack>
            <HStack className="pt-4 justify-between px-4">
              <Button className="bg-green-600 rounded-xl shadow-green-500">
                <Check size={20} color="#1e293b" strokeWidth={1.5} />
                <ButtonText className="text-white font-semibold">
                  Going
                </ButtonText>
              </Button>

              <Button
                className="border-gray-600 rounded-xl bg-white"
                style={{
                  borderWidth: 1,
                }}
              >
                <Star size={20} color="#1e293b" strokeWidth={1.5} />
                <ButtonText className="text-black font-semibold">
                  Interested
                </ButtonText>
              </Button>
              <Button
                className="border-gray-600 rounded-xl bg-white"
                style={{
                  borderWidth: 1,
                }}
              >
                <Share2 size={20} color="#1e293b" strokeWidth={1.5} />
                <ButtonText className="text-black font-semibold">
                  Share
                </ButtonText>
              </Button>
            </HStack>
          </Box>
          <Box className=" mt-4">
            <Divider className="my-0.5 w-full bg-gray-400" />
            <Box className="bg-red-500 w-[75]%">
              <Text>{weddingDesc.desc}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleDetail;
