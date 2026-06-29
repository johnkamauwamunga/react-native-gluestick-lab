import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[
          "#001F3F", // Midnight blue
          "#005792", // Sky blue
          "#00A8E8", // Bright blue
          "#E0F7FF", // Soft cloud white
        ]}
        locations={[0, 0.3, 0.7, 1]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text>Hey John</Text>
      </LinearGradient>
    </View>
  );
}
