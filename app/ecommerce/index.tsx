import Products from "@/assets/images/data/products.json";
import ProductCard from "@/components/indata/productCard";
import React from "react";
import { FlatList, SafeAreaView } from "react-native";

export default function Ecommerce() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={Products}
        renderItem={({ item }) => (
          <ProductCard
            {...item}
            onWishlist={(id) => console.log("Wishlist pressed for", id)}
            onCart={(id) => console.log("Cart pressed for", id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 8,
        }}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
}
