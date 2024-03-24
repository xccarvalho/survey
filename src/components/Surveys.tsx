import { FlatList, Text } from "react-native";

import { SurveyCard, SurveyProps } from "@/components/SurveyCard";

export type SurveysProps = SurveyProps[];

type Props = {
  surveys: SurveysProps;
};

export function Surveys({ surveys }: Props) {
  return (
    <FlatList
      data={surveys}
      renderItem={({ item }) => <SurveyCard survey={item} />}
      contentContainerClassName="py-6 gap-4"
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.title}
      ListEmptyComponent={() => (
        <Text className="font-regular text-sm text-gray-300">
          None surveys yet!
        </Text>
      )}
    />
  );
}
