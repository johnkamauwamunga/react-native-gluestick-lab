// import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { LinearGradient } from "expo-linear-gradient";
import { CheckIcon, Mail } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const LoginTrial = () => {
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
        className="flex-1"
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-center px-6 py-10">
            <View className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <View className="items-center mb-6">
                <Text className="text-4xl font-bold text-purple-900 tracking-wider">
                  AVIR
                </Text>
                <Text className="text-sm font-medium text-purple-700 mt-1 tracking-wide">
                  Fly Beyond Limits
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
              {/* 
                {/* Email/Username Field */}
              <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-1.5">
                  Email or Username
                </Text>
                <Input className="border-gray-300 rounded-xl bg-white h-12">
                  <InputSlot className="pl-3">
                    <InputIcon as={Mail} className="text-gray-400" />
                  </InputSlot>
                  <InputField
                    placeholder="Enter your email or username"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="text-gray-800"
                  />
                </Input>
              </View>

              <View className="mb-3">
                <Text className="text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </Text>
                <Input className="border-gray-300 rounded-xl bg-white">
                  <InputField
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="text-gray-800"
                  />
                </Input>
              </View>

              <View className="flex-row justify-between items-center mb-6">
                <Checkbox
                  value="remember"
                  isChecked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                >
                  <CheckboxIndicator className="rounded-md border-gray-300">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel className="ml-2 text-gray-700 text-sm">
                    Remember me
                  </CheckboxLabel>
                </Checkbox>

                <TouchableOpacity>
                  <Text className="text-sm font-medium text-purple-700">
                    Forgot password?
                  </Text>
                </TouchableOpacity>
              </View>

              <Button
                className="bg-purple-700 rounded-xl py-3.5 mb-4"
                onPress={handleLogin}
              >
                <ButtonText className="text-white text-lg font-bold tracking-wide">
                  Login
                </ButtonText>
              </Button>

              <View className="flex-row items-center mb-4">
                <View className="flex-1 h-px bg-gray-300" />
                <Text className="mx-4 text-gray-500 text-sm font-medium">
                  or
                </Text>
                <View className="flex-1 h-px bg-gray-300" />
              </View>

              <View className="flex-row justify-center space-x-4 mb-6"></View>

              <View className="flex-row justify-center">
                <Text className="text-gray-600 text-sm">
                  Dont have an account?
                </Text>
                <TouchableOpacity>
                  <Text className="text-purple-700 font-semibold ml-1 text-sm">
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default LoginTrial;
