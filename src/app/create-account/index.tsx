import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function CreateAccount() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleLogin = () => {
    // check for fullName textInput
    if (!fullName.trim()) {
      Alert.alert("Please enter a full name");
      return;
    }
    // check for email textInput
    if (!email.trim()) {
      Alert.alert("Please enter a email");
      return;
    }
    // check for newPassword textInput
    if (!newPassword.trim()) {
      Alert.alert("Please enter a password");
      return;
    }
    // check for passwordConfirm textInput
    if (!passwordConfirm.trim()) {
      Alert.alert("Please replay the password");
      return;
    }

    // Check successfully
    console.info("User created successfully!");
    router.navigate("./login/");
  };

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
              onChangeText={(value) => setFullName(value)}
              value={fullName}
            />
            <Text className="font-bold text-xl text-green-950">E-mail</Text>
            <Input
              placeholder="janedoe@survey.com"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={(value) => setEmail(value)}
              value={email}
            />
            <Text className="font-bold text-xl text-green-950">Password</Text>
            <Input
              placeholder="******"
              secureTextEntry
              textContentType="newPassword"
              onChangeText={(value) => setNewPassword(value)}
              value={newPassword}
            />
            <Text className="font-bold text-xl text-green-950">
              Confirm password
            </Text>
            <Input
              placeholder="******"
              secureTextEntry
              textContentType="newPassword"
              onChangeText={(value) => setPasswordConfirm(value)}
              value={passwordConfirm}
            />
            <Text className="pb-10"></Text>
            <Button variant="contained" title="Send" onPress={handleLogin} />
          </SafeAreaView>
        </ScrollView>
      </View>
    </View>
  );
}
