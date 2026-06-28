import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { Dimensions } from "react-native";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.3;
const CARD_WIDTH = SCREEN_WIDTH * 0.9;
const CARD_HEIGHT = 500;

type User = {
  id: string;
  name: string;
  age: number;
  image: string;
  bio: string;
  interests: string[];
};

type SwipeCardProps = {
  user: User;
  onSwipeLeft: () => void;
  onSwipeRight: (user: User) => void;
};

const SwipeCard: React.FC<SwipeCardProps> = ({
  user,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue(0);

  // Pan gesture using the new Gesture API
  const pan = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
      rotate.value = (event.translationX / SCREEN_WIDTH) * 15;
    })
    .onEnd((event) => {
      const shouldSwipe = Math.abs(event.translationX) > SWIPE_THRESHOLD;
      if (shouldSwipe) {
        const direction = event.translationX > 0 ? "right" : "left";
        // Animate off-screen
        translateX.value = withTiming(
          direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH,
          {
            duration: 300,
          },
        );
        translateY.value = withTiming(0, { duration: 300 });
        rotate.value = withTiming(direction === "right" ? 20 : -20, {
          duration: 300,
        });

        // Trigger callback after animation
        setTimeout(() => {
          if (direction === "right") {
            runOnJS(onSwipeRight)(user);
          } else {
            runOnJS(onSwipeLeft)();
          }
        }, 300);
      } else {
        // Reset to center
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        rotate.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${rotate.value}deg` },
    ],
  }));

  // Manual swipe from button
  const triggerSwipe = (direction: "left" | "right") => {
    translateX.value = withTiming(
      direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH,
      {
        duration: 300,
      },
    );
    rotate.value = withTiming(direction === "right" ? 20 : -20, {
      duration: 300,
    });
    setTimeout(() => {
      if (direction === "right") {
        runOnJS(onSwipeRight)(user);
      } else {
        runOnJS(onSwipeLeft)();
      }
    }, 300);
  };

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          {
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            borderRadius: 20,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 5,
            overflow: "hidden",
          },
          animatedStyle,
        ]}
      >
        <Image
          source={{ uri: user.image }}
          style={{ width: "100%", height: "70%" }}
          alt={user.name}
          resizeMode="cover"
        />
        <VStack space="xs" className="p-4">
          <HStack space="sm">
            <Text className="font-bold text-xl">{user.name}</Text>
            <Text className="font-medium text-lg text-gray-500">
              {user.age}
            </Text>
          </HStack>
          <Text className="text-gray-600" numberOfLines={2}>
            {user.bio}
          </Text>
        </VStack>
      </Animated.View>
    </GestureDetector>
  );
};

export default SwipeCard;
