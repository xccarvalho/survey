import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  lgButton?: boolean;
  backButton?: boolean;
  handleBack?: () => void;
};

export function Button({
  title,
  lgButton = false,
  backButton = false,
  handleBack,
  ...rest
}: Props) {
  return backButton ? (
    <TouchableOpacity
      className="flex flex-row items-center ml-3 mt-2"
      onPress={handleBack}
    >
      <MaterialIcons name="chevron-left" size={26} className="text-green-950" />
      <Text>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-green-950 rounded-lg items-center justify-center 
       ${lgButton ? "py-7 px-7" : "px-4 py-4"}`}
      {...rest}
    >
      <Text className="text-white text-sm font-semiBold uppercase">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
