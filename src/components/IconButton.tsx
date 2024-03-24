import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  iconName: any;
  color?: string;
  size?: number;
};

export function IconButton({ iconName, color, size, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} className="" {...rest}>
      <MaterialIcons
        name={iconName}
        size={size ? size : 22}
        color={color ? color : "rgb(5,46,22)"}
        className="mr-1"
      />
    </TouchableOpacity>
  );
}
