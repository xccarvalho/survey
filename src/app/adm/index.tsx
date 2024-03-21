import { ScrollView, View } from "react-native";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import CollapsibleView from "@/components/CollapsibleView";
import { SurveysList } from "@/components/SurveysList";
import { BackButton } from "@/components/BackButton";

import { router } from "expo-router";

export default function Adm() {
  function goToCreateSurveyScreen() {
    router.navigate("../survey-create");
  }

  return (
    <View className="flex-1">
      <Header variant="header" title="Adm" />
      <View className="mb-4 flex flex-row items-center justify-between pr-6">
        <BackButton title="Back" />
        <Button title="Create Survey" onPress={goToCreateSurveyScreen} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerClassName="gap-4"
        className="px-6"
      >
        <CollapsibleView title="Active Surveys">
          <SurveysList />
        </CollapsibleView>
        <CollapsibleView title="Closed Surveys">
          <SurveysList />
        </CollapsibleView>
      </ScrollView>
    </View>
  );
}
