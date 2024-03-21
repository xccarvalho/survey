import { SafeAreaView, View, Text } from "react-native";
import { router } from "expo-router";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { BackButton } from "../../components/BackButton";
import { Input } from "@/components/Input";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function goToAdmPage() {
    router.navigate("../adm/");
  }

  return (
    <View className="flex-1">
      <Header variant="header" title="Login" />
      <BackButton title="Back" />

      <View className="flex-1 px-6">
        <View className="border-b border-gray-200 pb-12">
          <Header
            variant="main"
            title="Isn't an administrator yet?"
            subtitle="Please, click to create an account"
          />
          <View className="flex-row justify-center">
            <Button title="Create an account" onPress={() => {}} />
          </View>
        </View>
        <SafeAreaView className="gap-2 pt-10">
          <Text className="font-bold text-xl text-green-950">E-mail</Text>
          <Input
            placeholder="janedoe@survey.com"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={setEmail}
            value={email}
          />
          <Text className="font-bold text-xl text-green-950">Password</Text>
          <Input
            placeholder="******"
            secureTextEntry
            textContentType="password"
            onChangeText={setPassword}
            value={password}
          />
          <Text className="mb-7 self-end text-sm text-gray-700">
            Forget your password?
          </Text>
          <Button variant="contained" title="Enter" onPress={goToAdmPage} />
        </SafeAreaView>
      </View>
    </View>
  );
}
