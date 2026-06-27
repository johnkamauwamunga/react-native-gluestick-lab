import events from "@/assets/images/data/events.json";
import EventCard from "@/components/events/eventCard";
import Menu from "@/components/events/menu";
import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import React, { useRef, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";

const { width, height } = Dimensions.get("window");

// ------------- Sponsored Banner Carousel Item -------------
const BannerItem = ({ event }: { event: any }) => {
  return (
    <Box style={{ width: width, height: "100%" }} className="relative">
      <Image
        source={{ uri: event.bannerImage }}
        resizeMode="cover"
        className="w-full h-full"
        alt={event.name}
      />
      {/* Overlay with event details */}
      <Box className="absolute bottom-0 left-0 right-0 bg-black/40 px-4 py-3">
        <Text className="text-white text-lg font-bold">{event.name}</Text>
        <Text className="text-white text-sm">{event.venue}</Text>
        <Text className="text-white/80 text-xs">
          {event.date} · {event.time}
        </Text>
      </Box>
      {/* Sponsored badge */}
      <Box className="absolute top-3 right-3 bg-yellow-400 rounded-full px-3 py-1">
        <Text className="text-black text-xs font-bold">Sponsored</Text>
      </Box>
    </Box>
  );
};

// ------------- Main Screen -------------
export default function Articles() {
  const sponsoredEvents = events.filter((e) => e.sponsored === true);
  const banners = sponsoredEvents.length > 0 ? sponsoredEvents : [events[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View className="flex-1 bg-blue-700">
      {/* Banner carousel area with fixed height */}
      <Box className="h-56 w-full relative">
        <FlatList
          ref={flatListRef}
          data={banners}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <BannerItem event={item} />}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
          style={{ flex: 1 }} // ensures the list takes the full height of the Box
        />
        {/* Dots indicator */}
        {banners.length > 1 && (
          <Box className="absolute bottom-2 left-0 right-0 flex-row justify-center">
            {banners.map((_, index) => (
              <Box
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </Box>
        )}
      </Box>

      {/* White container with menu + list */}
      <Box
        className="bg-white flex-1"
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
      >
        <Menu />
        <FlatList
          data={events}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <EventCard event={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </Box>
    </View>
  );
}
