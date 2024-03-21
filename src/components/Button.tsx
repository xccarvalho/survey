import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  variant?: "text" | "contained";
  title: string;
  lgButton?: boolean;
};

export function Button({
  variant = "text",
  title,
  lgButton = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`items-center justify-center rounded-lg 
      ${variant === "contained" && "bg-green-950"}
      ${lgButton ? "px-7 py-7" : "px-4 py-4"}`}
      {...rest}
    >
      <Text
        className={`font-bold text-sm uppercase  ${variant === "contained" ? "text-white" : "text-green-950"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
