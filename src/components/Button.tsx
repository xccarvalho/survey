import { MaterialIcons } from "@expo/vector-icons";
import classNames from "classnames";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  variant?: "text" | "contained" | "outlined";
  title: string;
  lgButton?: boolean;
  iconStart?: any;
  iconEnd?: any;
  bgDark?: boolean;
};

export function Button({
  variant = "text",
  title,
  lgButton = false,
  iconStart,
  iconEnd,
  bgDark,
  ...rest
}: Props) {
  // const textWhite = classNames({ "text-white": bgDark });

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={classNames(
        "flex-row items-center justify-center rounded-lg px-4 py-4",
        {
          "bg-green-950": variant === "contained",
          "px-7 py-7": lgButton,
        },
      )}
      {...rest}
    >
      {iconStart && (
        <MaterialIcons
          name={iconStart}
          size={22}
          color={bgDark ? "#FFF" : "rgb(5,46,22)"}
          className="mr-1"
        />
      )}
      <Text
        className={classNames("font-bold text-sm uppercase text-green-950", {
          "text-white": variant === "contained" || bgDark,
          "border border-white": variant === "outlined" && bgDark,
          "border border-green-950": variant === "outlined",
        })}
      >
        {title}
      </Text>
      {iconEnd && (
        <MaterialIcons
          name={iconEnd}
          size={22}
          color={bgDark ? "#FFF" : "rgb(5,46,22)"}
          className="ml-1"
        />
      )}
    </TouchableOpacity>
  );
}
