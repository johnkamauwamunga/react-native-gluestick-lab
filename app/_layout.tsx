import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import {
  Book,
  Heart,
  MessageCircle,
  ShoppingBag,
  User,
} from "lucide-react-native";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { useColorScheme } from "@/hooks/use-color-scheme";

// ----- Custom Drawer Header (UI Lab) -----
function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          paddingVertical: 24,
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#e5e7eb",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#0f172a" }}>
          🧪 UI Lab
        </Text>
        <Text style={{ color: "#6b7280", fontSize: 14 }}>
          Explore screens & components
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GluestackUIProvider mode={colorScheme === "dark" ? "dark" : "light"}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
            drawerContent={CustomDrawerContent}
            screenOptions={{
              headerShown: true,
              drawerActiveTintColor: "#dc2626",
              drawerInactiveTintColor: "#374151",
              drawerLabelStyle: { fontSize: 16, fontWeight: "500" },
            }}
          >
            {/* 👇 Each screen becomes a drawer item */}
            <Drawer.Screen
              name="profile"
              options={{
                title: "Profile",
                drawerIcon: ({ color, size }) => (
                  <User size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="articles/feed"
              options={{
                title: "Articles Feed",
                drawerIcon: ({ color, size }) => (
                  <Book size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="messaging/chats"
              options={{
                title: "Chats",
                drawerIcon: ({ color, size }) => (
                  <MessageCircle size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="ecommerce/products"
              options={{
                title: "Products",
                drawerIcon: ({ color, size }) => (
                  <ShoppingBag size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="matchmaking"
              options={{
                title: "Match Making",
                drawerIcon: ({ color, size }) => (
                  <Heart size={size} color={color} />
                ),
              }}
            />
          </Drawer>
          <StatusBar style="auto" />
        </GestureHandlerRootView>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
