import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Heart, ShoppingCart } from "lucide-react-native";
import React, { memo } from "react";
import { Text } from "react-native";

export type ProductProps = {
  id: string | number;
  name: string;
  description?: string;
  image: string;
  price: number | string;
  onWishlist?: (id: string | number) => void;
  onCart?: (id: string | number) => void;
};

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
    const formattedPrice =
      typeof price === "number"
        ? price.toFixed(2)
        : parseFloat(price).toFixed(2);

    return (
      <Card
        className="flex-1 m-1 p-3 rounded-xl"
        style={{
          backgroundColor: "#FFFFFF",
          elevation: 3,
          shadowColor: "#1A1A2E",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.15,
          shadowRadius: 6,
          borderWidth: 1,
          borderColor: "#E8C99B", // softened copper
        }}
      >
        <Box className="items-center justify-center p-2">
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            size="2xl"
            rounded-lg
            alt={name}
          />
        </Box>

        <VStack space="sm" className="mt-1">
          <Text
            className="font-semibold text-base"
            style={{ color: "#1A1A2E" }} // dark navy
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {name}
          </Text>

          <Text
            className="text-sm"
            style={{ color: "#6B7280" }} // gray-500
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {description}
          </Text>

          <Text
            className="font-bold text-xl"
            style={{ color: "#D4AF37" }} // gold
          >
            Ksh {formattedPrice}
          </Text>

          <HStack space="md" className="mt-2 justify-between">
            {/* <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onWishlist?.(id)}
              className="flex-1"
            > */}
            <Button
              className="rounded-xl py-2 flex-1"
              style={{ backgroundColor: "#2D2D3F" }} // dark slate
              accessibilityLabel={`Add ${name} to wishlist`}
              onPress={() => onWishlist?.(id)}
            >
              <Heart size={18} color="#FFFFFF" strokeWidth={1.5} />
              <ButtonText className="ml-2 text-white text-xs">
                Wishlist
              </ButtonText>
            </Button>
            {/* </TouchableOpacity> */}

            {/* <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onCart?.(id)}
              className="flex-1"
            > */}
            <Button
              className="rounded-xl py-2 flex-1"
              style={{ backgroundColor: "#BF7224" }} // brand copper
              accessibilityLabel={`Add ${name} to cart`}
              onPress={() => onCart?.(id)}
            >
              <ShoppingCart size={18} color="#FFFFFF" strokeWidth={1.5} />
              <ButtonText className="ml-2 text-white text-xs">Cart</ButtonText>
            </Button>
            {/* </TouchableOpacity> */}
          </HStack>
        </VStack>
      </Card>
    );
  },
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
