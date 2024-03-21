import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

export type SurveyProps = {
  title: string;
  description: string;
};

type Props = TouchableOpacityProps & {
  survey: SurveyProps;
};

export function SurveyCard({ survey, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="h-24 rounded-lg border-none bg-green-50 p-4 shadow-md"
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="mb-1 font-bold text-lg text-green-950">
        {survey.title}
      </Text>
      <Text className="truncate font-regular text-sm text-gray-700">
        {survey.description}
      </Text>
    </TouchableOpacity>
  );
}
