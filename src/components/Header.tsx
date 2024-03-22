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
    <View className="flex flex-row items-center justify-between bg-zinc-100 px-6 pb-3 pt-14">
      <Text className="font-bold text-4xl text-green-950">{title}</Text>
      <MaterialIcons
        name="person"
        size={34}
        onPress={handlePress}
        className="text-green-950"
      />
    </View>
  ) : (
    <View className="items-center py-6">
      <Text className="font-bold text-4xl text-green-950">{title}</Text>
      <Text className="font-regular text-lg text-green-950">{subtitle}</Text>
    </View>
  );
}
