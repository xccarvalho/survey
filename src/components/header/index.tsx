import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
type Props = {
  variant?: "header" | "main";
  title: string;
  subtitle?: string;
  handlePress?: () => void;
};

export function Header({
  variant = "main",
  title,
  subtitle,
  handlePress,
}: Props) {
  return variant === "header" ? (
    <View className="flex flex-row items-center justify-between pt-14 pb-3 px-6 bg-zinc-100">
      <Text className="text-green-950 font-bold text-4xl">{title}</Text>
      <MaterialIcons
        name="person"
        size={34}
        onPress={handlePress}
        className="text-green-950"
      />
    </View>
  ) : (
    <View className="py-6 items-center">
      <Text className="text-green-950 font-bold text-4xl">{title}</Text>
      <Text className="text-green-950 font-regular text-lg">{subtitle}</Text>
    </View>
  );
}
