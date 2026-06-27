// components/SponsoredBanner.tsx
import { Box } from "@/components/ui/box";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Sparkles } from "lucide-react-native";
import React from "react";

interface SponsoredBannerProps {
  event: Event;
}

export const SponsoredBanner: React.FC<SponsoredBannerProps> = ({ event }) => {
  return (
    <Card
      className="mx-3 my-2 p-0 rounded-xl overflow-hidden border border-yellow-300 bg-white shadow-lg"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
      }}
    >
      <Box className="relative">
        <Image
          source={{ uri: event.bannerImage }}
          resizeMode="cover"
          className="w-full h-40"
          alt={event.name}
        />
        {/* Sponsored badge */}
        <Box className="absolute top-2 right-2 bg-yellow-400 rounded-full px-3 py-1 flex-row items-center">
          <Sparkles size={14} color="#000" />
          <Text className="text-black text-xs font-bold ml-1">Sponsored</Text>
        </Box>
        {/* Overlay text on image (optional) */}
        <Box className="absolute bottom-0 left-0 right-0 bg-black/40 px-3 py-2">
          <Text className="text-white text-lg font-bold">{event.name}</Text>
          <Text className="text-white text-sm">{event.venue}</Text>
          <Text className="text-white/80 text-xs">
            {event.date} · {event.time}
          </Text>
        </Box>
      </Box>
    </Card>
  );
};
