import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

export type SurveyProps = {
  title: string;
  description: string;
};

type Props = TouchableOpacityProps & {
  survey: SurveyProps;
};

export function Survey({ survey, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="h-24 bg-green-50 shadow-xl rounded-lg p-4"
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="text-green-950 font-bold text-lg mb-1">
        {survey.title}
      </Text>
      <Text className="text-gray-700 font-regular text-sm truncate">
        {survey.description}
      </Text>
    </TouchableOpacity>
  );
}
