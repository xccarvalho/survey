import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="mt-8 h-12 w-1/2 bg-green-950 rounded-lg items-center justify-center self-end"
      {...rest}
    >
      <Text className="text-white text-sm font-semiBold uppercase">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
