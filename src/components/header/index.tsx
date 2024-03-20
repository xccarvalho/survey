import { View, Text } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};

export function Header({ title, subtitle }: Props) {
  return (
    <View className="mt-14 mb-12">
      <Text className="text-green-950 font-bold text-4xl">{title}</Text>
      <Text className="text-green-950 font-regular text-lg">{subtitle}</Text>
    </View>
  );
}