import { ScrollView } from "react-native";
import { SurveyCard } from "./SurveyCard";

export type SurveyListProps = {
  id: string;
  title: string;
}[];

type Props = {
  SurveyList?: SurveyListProps;
};

export function SurveysList({ SurveyList, ...rest }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      contentContainerClassName="gap-4"
      className="mx-auto max-h-[37.5rem] w-11/12"
    >
      {/* {SurveyList.map(({ id, title }) => (
        <Survey key={id} survey={{ title }} />
      ))} */}

      {Array.from({ length: 45 }).map((_survey, index) => (
        <SurveyCard
          {...rest}
          key={index}
          survey={{
            title: `${index + 1}  - Survey Title`,
            description:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
          }}
        />
      ))}
    </ScrollView>
  );
}
