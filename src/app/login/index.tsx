import { SafeAreaView, TextInput, View, Text } from "react-native";
import { router } from "expo-router";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";

export default function Login() {
  function handleBack() {
    router.navigate("./");
  }
  function goToAdmPage() {
    router.navigate("../adm/");
  }

  return (
    <View className="bg-neutral-50 h-full">
      <Header variant="header" title="Login" />
      <Button backButton title="Back" onPress={handleBack} />
      <View className="px-6">
        <Header
          variant="main"
          title="Isn't an administrator yet?"
          subtitle="Please, click to create an account"
        />
        <Button title="Create an account" onPress={() => {}} />
        <SafeAreaView className="mt-12 gap-2">
          <Text className="font-bold text-xl text-green-950">E-mail</Text>
          <TextInput
            placeholder="janedoe@survey.com"
            className="p-4 shadow rounded border-none text-green-950 font-medium text-2xl"
          />
          <Text className="font-bold text-xl text-green-950">Password</Text>
          <TextInput
            placeholder="*****"
            className="p-4 shadow rounded border-none text-green-950 font-medium text-2xl"
          />
          <Text className="font-thin text-sm text-gray-700 self-end">
            Forget your password?
          </Text>
          <Button title="Enter" onPress={goToAdmPage} />
        </SafeAreaView>
      </View>
    </View>
  );
}
