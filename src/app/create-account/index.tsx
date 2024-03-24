import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function CreateAccount() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function goToLogin() {
    router.navigate("./login/");
  }

  return (
    <View className="flex-1">
      <Header variant="header" title="Create Account" />
      <BackButton title="Back" />

      <View className="flex-1 px-6">
        <Header
          variant="main"
          title="Create an administrator account"
          subtitle="to provide your own survey"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView className="gap-2 pt-8">
            <Text className="font-bold text-xl text-green-950">Full name</Text>
            <Input
              placeholder="Jane Doe"
              keyboardType="default"
              textContentType="name"
              onChangeText={setFullName}
              value={fullName}
            />
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
              textContentType="newPassword"
              onChangeText={setNewPassword}
              value={newPassword}
            />
            <Text className="font-bold text-xl text-green-950">
              Confirm password
            </Text>
            <Input
              placeholder="******"
              secureTextEntry
              textContentType="newPassword"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
            <Text className="pb-10"></Text>
            <Button variant="contained" title="Send" onPress={goToLogin} />
          </SafeAreaView>
        </ScrollView>
      </View>
    </View>
  );
}
