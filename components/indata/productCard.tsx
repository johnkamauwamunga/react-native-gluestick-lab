import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Heart, ShoppingCart } from "lucide-react-native";
import React, { memo } from "react";
import { Text, TouchableOpacity } from "react-native";

// ==============================
// 1. Type definition
// ==============================
export type ProductProps = {
  id: string | number;
  name: string;
  description?: string; // optional, fallback to empty string
  image: string;
  price: number | string;
  onWishlist?: (id: string | number) => void;
  onCart?: (id: string | number) => void;
};

// ==============================
// 2. Component (memoized)
// ==============================
const ProductCard = memo(
  ({
    id,
    name,
    description = "",
    image,
    price,
    onWishlist,
    onCart,
  }: ProductProps) => {
    // Format price to two decimals
    const formattedPrice =
      typeof price === "number"
        ? price.toFixed(2)
        : parseFloat(price).toFixed(2);

    return (
      <Card
        className="flex-1 m-1 p-3 bg-white rounded-xl"
        style={{
          elevation: 2,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          borderWidth: 1,
          borderColor: "#BF7224",
        }}
      >
        {/* Image */}
        <Box className="items-center justify-center p-2">
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            size="2xl"
            rounded-lg
            alt={name}
            // fallbackSource={require("@/assets/images/placeholder.png")} // optional
          />
        </Box>

        {/* Details */}
        <VStack space="sm" className="mt-1">
          <Text
            className="font-semibold text-base"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {name}
          </Text>

          <Text
            className="text-sm text-gray-500"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {description}
          </Text>

          <Text className="font-bold text-xl text-green-700">
            Ksh {formattedPrice}
          </Text>

          {/* Action Buttons */}
          <HStack space="md" className="mt-2 justify-between">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onWishlist?.(id)}
              className="flex-1"
            >
              <Button
                className="bg-black rounded-xl py-2 flex-1"
                accessibilityLabel={`Add ${name} to wishlist`}
              >
                <Heart size={18} color="white" strokeWidth={1.5} />
                <ButtonText className="ml-2 text-white text-xs">
                  Wishlist
                </ButtonText>
              </Button>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onCart?.(id)}
              className="flex-1"
            >
              <Button
                className="bg-green-700 rounded-xl py-2 flex-1"
                accessibilityLabel={`Add ${name} to cart`}
              >
                <ShoppingCart size={18} color="white" strokeWidth={1.5} />
                <ButtonText className="ml-2 text-white text-xs">
                  Cart
                </ButtonText>
              </Button>
            </TouchableOpacity>
          </HStack>
        </VStack>
      </Card>
    );
  },
);

// Optional: set display name for debugging
ProductCard.displayName = "ProductCard";

export default ProductCard;
