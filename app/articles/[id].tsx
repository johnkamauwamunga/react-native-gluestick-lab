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
import { VStack } from "@/components/ui/vstack";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ArrowLeft,
  Calendar,
  Check,
  Heart,
  Share2,
  Star,
  Users,
  Verified,
} from "lucide-react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";

const weddingDesc = {
  desc: "Join Us as we celebrate love and unity. Your Presence will make it en more special. come one come all.once, Join Us as we celebrate love and unity. Your Presence will make it en more special. come one come all",
};

const eventsTry = {
  id: 2,
  name: "Tech Summit 2025",
  venue: "Convention Center, Nairobi",
  type: "Technology",
  date: "15 July 2025",
  time: "09:00 AM",
  numOfAttending: "120",
  bannerImage:
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  price: 0,
  attending: {
    user1:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    user2:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    user3:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  sponsored: true,
  sponsoredBy: "Google",
};

const ArticleDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const eventDetail = events.find((e) => e.id === Number(id));
  const routes = useRouter();

  return (
    <Box className="flex-1 bg-blue-500">
      {/* Header Image */}
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

      {/* Content */}
      <Box
        className="flex-1 bg-white"
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <Box className="px-4 pt-3">
          <Box className="justify-between">
            <Box className="bg-red-600 rounded-xl p-1 w-[20%] items-center justify-center">
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
              <Verified size={18} color="pink" />
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
                <Check size={20} color="white" strokeWidth={1.5} />
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

          <Box className="mt-2">
            <Divider className="my-0.5 w-full bg-gray-400" />
            <Box className="mt-4 w-[75]% pr-12">
              <Text numberOfLines={2} className="text-base font-inter">
                {weddingDesc.desc}
              </Text>
            </Box>
          </Box>

          {/* Horizontal Scroll – with fixed height wrapper */}
          <Box className="mt-3 w-full h-56">
            {/* Header */}
            <Text className="font-bold text-base color-slate-800 mb-2">
              Other Related Events
            </Text>

            {/* ScrollView container – takes remaining space */}
            <HStack className="flex-1">
              <Box className="w-full h-full">
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="w-full h-full"
                >
                  <Box className="flex-row items-center gap-4 px-4 h-full">
                    {events.map((event, index) => (
                      <Box
                        key={event.id || index}
                        className="relative w-64 h-full aspect-square bg-white rounded-xl overflow-hidden"
                      >
                        {/* Heart */}
                        <Box className="absolute top-3 right-3 z-10 bg-red-600 w-10 aspect-square items-center justify-center rounded-full">
                          <Heart size={15} color="white" />
                        </Box>

                        {/* Image */}
                        <Image
                          source={{ uri: event.bannerImage }}
                          className="w-full h-full"
                          alt={event?.name}
                          resizeMode="cover"
                        />

                        {/* VStack – bottom */}
                        <VStack className="absolute bottom-0 left-0 w-full bg-black/50 px-2 py-1 gap-1">
                          <Text className="color-white font-semibold text-base">
                            {event.name}
                          </Text>
                          <Text className="color-slate-300 font-medium text-sm">
                            {event.venue}
                          </Text>
                          <Text className="color-slate-300 font-medium text-xs">
                            {event.date} . {event.time}
                          </Text>
                        </VStack>
                      </Box>
                    ))}
                  </Box>
                </ScrollView>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleDetail;
