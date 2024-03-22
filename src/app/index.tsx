import { SurveysList } from "@/components/SurveysList";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { router } from "expo-router";
import { View } from "react-native";

export default function Home() {
  function goToLogin() {
    router.navigate("./login/");
  }
  function goToCreateAccount() {
    router.navigate("../account-create/");
  }

  return (
    <View className="flex-1">
      <Header variant="header" title="Survey" handlePress={goToLogin} />
      <View className="px-6">
        <Header title="Active Surveys" subtitle="Your opinion is important!" />
        <SurveysList />
        <View className="mt-12 flex items-center">
          <Button
            variant="contained"
            lgButton
            title="Create an adm profile"
            onPress={goToCreateAccount}
          />
        </View>
      </View>
    </View>
  );
}
