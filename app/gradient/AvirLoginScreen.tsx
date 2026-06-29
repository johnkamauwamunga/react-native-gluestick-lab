// import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { LinearGradient } from "expo-linear-gradient";
import { Key, Mail } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

const AvirLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Handle login logic
    console.log("Login with:", email, password, rememberMe);
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#5B146F", "#FF009C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-center py-10 px-6 ">
            <View className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <View className="mb-8 items-center">
                <Text className="text-4xl font-bol color-purple-900 tracking-wider">
                  AVIR
                </Text>
                <Text className="text-sm font-medium color-purple-700 mt-1 tracking-wide">
                  Fly with you
                </Text>
              </View>

              <View className="mb-6">
                <Text className="text-2xl font-bold text-gray-800">
                  Welcome Back 🎉
                </Text>
                <Text className="text-sm text-gray-500 mt-1">
                  Login to your account
                </Text>
              </View>

              <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-1.5">
                  Email or Username
                </Text>
                <Input className="bg-white border-gray-300 rounded-xl h-14">
                  <InputSlot className="pl-3">
                    <InputIcon as={Mail} className="text-gray-400" />
                  </InputSlot>
                  <InputField
                    placeholder="Enter Email address"
                    value={email}
                    onChangeText={setEmail}
                    className="text-gray-800"
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </Input>
              </View>

              <View className="mb-3">
                <Text className="text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </Text>
                <Input className="border-gray-300 rounded-xl bg-white h-14">
                  <InputSlot>
                    <InputIcon as={Key} className="text-gray-400" />
                  </InputSlot>
                  <InputField
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="text-gray-800"
                  />
                </Input>
              </View>

              <Button
                className="bg-purple-700 rounded-xl py-3.5 mb-4 h-15"
                onPress={handleLogin}
              >
                <ButtonText className="text-white text-lg font-bold tracking-wide">
                  Login
                </ButtonText>
              </Button>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default AvirLoginScreen;
