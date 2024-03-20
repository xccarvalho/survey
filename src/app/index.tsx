import { Header } from "@/components/header";
import Surveys from "@/components/surveys";
import { View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 p-8 bg-green-200">
      <Header title="Active Surveys" subtitle="Your opinion is important!" />
      <Surveys />
    </View>
  );
}
