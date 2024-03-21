import { SurveyList } from "@/components/SurveyList";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { router } from "expo-router";
import { View } from "react-native";

export default function Home() {
  function goLoginPage() {
    router.navigate("./login/");
  }

  return (
    <View className="bg-neutral-50 h-full">
      <Header variant="header" title="Survey" handlePress={goLoginPage} />
      <View className="px-6">
        <Header title="Active Surveys" subtitle="Your opinion is important!" />
        <SurveyList />
        <View className="flex items-center mt-12">
          <Button
            lgButton
            title="Create an adm profile"
            onPress={goLoginPage}
          />
        </View>
      </View>
    </View>
  );
}
