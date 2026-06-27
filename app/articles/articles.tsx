import EventCard from "@/components/events/eventCard";
import Menu from "@/components/events/menu";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { View } from "react-native";

export default function Articles() {
  return (
    <View className="flex-1 bg-blue-700">
      <Box className=" justify-center items-center h-[20%] w-full">
        <Text className="font-bold text-xl color-white">The standard</Text>
      </Box>
      <Box
        className="bg-white h-full"
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <Menu />
        <Box>
          <EventCard />
        </Box>
      </Box>
    </View>
  );
}
