import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import CollapsibleView from "@/components/CollapsibleView";
import { SurveyList } from "@/components/SurveyList";

export default function Adm() {
  function handleBack() {
    router.navigate("./");
  }

  return (
    <View className="bg-neutral-50 h-full">
      <Header variant="header" title="Adm" />
      <View className="flex flex-row items-center justify-between mb-4">
        <Button backButton title="Back" onPress={handleBack} />
        <Button title="Create Survey" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerClassName="gap-4"
        className="px-6"
      >
        <CollapsibleView title="Active Surveys">
          <SurveyList />
        </CollapsibleView>
        <CollapsibleView title="Closed Surveys">
          <SurveyList />
        </CollapsibleView>
      </ScrollView>
    </View>
  );
}
