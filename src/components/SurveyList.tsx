import { ScrollView } from "react-native";
import { Survey } from "./Survey";

export type SurveyListProps = {
  id: string;
  title: string;
}[];

type Props = {
  SurveyList?: SurveyListProps;
};

export function SurveyList({ SurveyList, ...rest }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      contentContainerClassName="gap-4"
      className="w-11/12 max-h-[37.5rem] mx-auto"
    >
      {/* {SurveyList.map(({ id, title }) => (
        <Survey key={id} survey={{ title }} />
      ))} */}

      {Array.from({ length: 45 }).map((_survey, index) => (
        <Survey
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
