import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { router } from "expo-router";
import { Text, View } from "react-native";

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
      <View className="px-6">
        {/* <CollapsibleView title="Active Surveys"> */}
        <Text>It's opened</Text>
        {/* <Surveys /> */}
        {/* </CollapsibleView> */}
      </View>
    </View>
  );
}
