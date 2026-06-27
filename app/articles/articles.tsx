import events from "@/assets/images/data/events.json";
import EventCard from "@/components/events/eventCard";
import Menu from "@/components/events/menu";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { FlatList, View } from "react-native";

export default function Articles() {
  return (
    <View className="flex-1 bg-blue-700">
      <Box className="justify-center items-center h-[20%] w-full">
        <Text className="font-bold text-xl color-white">The standard</Text>
      </Box>
      <Box
        className="bg-white flex-1" // <-- added flex-1 to fill remaining space
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <Menu />
        <Box className="flex-1">
          {" "}
          {/* <-- this Box takes the rest of the height */}
          <FlatList
            data={events}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <EventCard event={item} />}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      </Box>
    </View>
  );
}
