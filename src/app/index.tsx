import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { router } from "expo-router";
import { View } from "react-native";
import { Surveys, SurveysProps } from "@/components/Surveys";
import { useEffect, useState } from "react";
import { mocks } from "@/utils/mocks";

export default function Home() {
  const [surveys, setSurveys] = useState<SurveysProps>([]);
  async function fetchSurveys() {
    try {
      const response = mocks.surveysCardArr;
      setSurveys(
        response.map((item) => ({
          ...item,
          isAdm: false,
          handlePress: goToSurveyDetail,
        })),
      );
    } catch (error) {
      console.log(error);
    }
  }

  function goToLogin() {
    router.navigate("./login/");
  }
  function goToCreateAccount() {
    router.navigate("./create-account/");
  }
  function goToSurveyDetail() {
    router.navigate("./survey-detail/");
  }

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <View className="flex-1">
      <Header variant="header" title="Survey" handlePress={goToLogin} />
      <View className="px-6">
        <Header title="Active Surveys" subtitle="Your opinion is important!" />
        <Surveys surveys={surveys} />
        <View className="mt-12 flex items-center">
          <Button
            variant="contained"
            size="lg"
            title="Create an adm profile"
            onPress={goToCreateAccount}
          />
        </View>
      </View>
    </View>
  );
}
