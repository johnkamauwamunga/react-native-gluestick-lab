import events from "@/assets/images/data/events.json";
import EventComponent from "@/components/events/EventComponent";
import Menu from "@/components/events/menu";
import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { useRef, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";

const { width, height } = Dimensions.get("window");

const BannerItem = ({ event }: { event: any }) => {
  return (
    <Box style={{ width: width, height: "100%" }} className="relative">
      <Image
        source={{ uri: event.bannerImage }}
        resizeMode="cover"
        className="w-full h-full"
        alt={event.name}
      />
      <Box className="bg-black/40 w-full absolute bottom-0 right-0 left-0 px-4 py-3">
        <Text className="color-slate-100 text-base font-semibold">
          {event.name}
        </Text>
        <Text className="color-slate-100 text-base font-inter">
          {event.venue}
        </Text>
        <Text className="color-slate-300 text-sm font-medium">
          {event.date} . {event.time}
        </Text>
      </Box>
      {/* Sponsored badge */}
      <Box className="bg-yellow-400 absolute top-3 right-3 rounded-full px-2  ">
        <Text className="color-slate-800 text-xs font-semibold">Sponsered</Text>
      </Box>
    </Box>
  );
};

export default function Events() {
  const sponsoredEvents = events.filter((e) => e.sponsored === true);
  const banners = sponsoredEvents.length > 0 ? sponsoredEvents : [events[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View className="bg-black flex-1">
      <Box className="w-full h-56 relative">
        <FlatList
          ref={flatListRef}
          data={banners}
          renderItem={({ item }) => <BannerItem event={item} />}
          keyExtractor={(item) => item.id.toString()}
          style={{ flex: 1 }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          onScroll={onScroll}
        />

        <Box className="absolute mx-1 justify-center bottom-2 flex-row left-0 right-0 gap-2">
          {banners.map((_, index) => (
            <Box
              key={index}
              className={`h-2 w-2 rounded-full bg-red-700 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              } `}
            ></Box>
          ))}
        </Box>
      </Box>
      <Box
        className="bg-white h-full"
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
      >
        <Menu />

        <Box className=" h-full w-full">
          <FlatList
            data={events}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <EventComponent event={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </Box>
      </Box>
    </View>
  );
}
