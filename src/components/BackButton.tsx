import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";

type Props = {
  title?: string;
};
export function BackButton({ title }: Props) {
  return (
    <Link href="/">
      <View className="flex-row items-center ml-4 mt-2">
        <MaterialIcons
          name="chevron-left"
          size={26}
          className="text-green-950"
        />
        <Text>{title}</Text>
      </View>
    </Link>
  );
}
