import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";

type Props = {
  title?: string;
  href?: any;
};
export function BackButton({ title, href }: Props) {
  return (
    <Link href={href ? href : "/"}>
      <View className="ml-4 mt-2 flex-row items-center">
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
