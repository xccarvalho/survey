import { ScrollView } from "react-native";
import { Survey } from "../survey";

export type SurveysProps = {
  id: string;
  title: string;
}[];

type Props = {
  surveys?: SurveysProps;
};

export default function Surveys({ surveys }: Props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerClassName="gap-4"
      className="w-full"
    >
      {/* {surveys.map(({ id, title }) => (
        <Survey key={id} survey={{ title }} />
      ))} */}

      {Array.from({ length: 13 }).map((_survey, index) => (
        <Survey
          key={index}
          survey={{
            title: "Survey Title",
            description:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
          }}
        />
      ))}
    </ScrollView>
  );
}
