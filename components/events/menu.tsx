import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
const Menu = () => {
  return (
    <HStack className="px-4 py-3 gap-3">
      <Button className="bg-blue-700 rounded-2xl">
        <ButtonText>All</ButtonText>
      </Button>

      <Button
        className="bg-white rounded-2xl border-gray-600"
        style={{
          borderWidth: 1,
          borderColor: "gray",
        }}
      >
        <ButtonText className="color-slate-600 font-semibold">
          Wedding
        </ButtonText>
      </Button>

      <Button
        className="bg-white rounded-2xl border-gray-600"
        style={{
          borderWidth: 1,
          borderColor: "gray",
        }}
      >
        <ButtonText className="color-slate-600 font-semibold">
          Farming
        </ButtonText>
      </Button>

      <Button
        className="bg-white rounded-2xl border-gray-600"
        style={{
          borderWidth: 1,
          borderColor: "gray",
        }}
      >
        <ButtonText className="color-slate-600 font-semibold">
          Fundraiser
        </ButtonText>
      </Button>
    </HStack>
  );
};

export default Menu;
