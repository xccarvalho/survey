import { Text, View, PressableProps, Pressable } from "react-native";
import { IconButton } from "./IconButton";
import classNames from "classnames";

export type SurveyProps = {
  title: string;
  description: string;
  isClosed?: boolean;
  isAdm?: boolean;
  questions?: [];
  handlePress?: () => void;
  handleDeleteSurvey?: () => void;
  handleEditSurvey?: () => void;
  handleCloseSurvey?: () => void;
};

type Props = PressableProps & {
  survey: SurveyProps;
};

export function SurveyCard({ survey, ...rest }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      className={classNames(
        "shadow-green-4 max-h-40 gap-3 rounded-lg bg-zinc-100 p-4 shadow",
        { "bg-yellow-900": survey.isClosed },
      )}
      onPress={survey.handlePress}
      {...rest}
    >
      <View>
        <View
          className={classNames({
            "flex-row items-center justify-between leading-none": survey.isAdm,
          })}
        >
          <Text
            numberOfLines={1}
            lineBreakMode="tail"
            className="font-bold text-lg leading-none text-green-950"
          >
            {survey.title}
          </Text>
          {survey.isAdm ? (
            <Text className="font-normal text-green-950">
              {survey.questions?.length} answers
            </Text>
          ) : null}
        </View>
        <Text
          numberOfLines={3}
          lineBreakMode="tail"
          className="mt-3 font-regular text-sm text-gray-700"
        >
          {survey.description}
        </Text>
      </View>
      {survey.isAdm ? (
        <View className="flex-row self-end">
          <IconButton
            iconName={"delete-forever"}
            size={28}
            color="rgb(220, 38, 38)"
            onPress={survey.handleDeleteSurvey}
          />
          <IconButton
            iconName={"edit"}
            size={28}
            color="rgb(34, 197, 94)"
            onPress={survey.handleEditSurvey}
          />
          <IconButton
            iconName={"cancel-presentation"}
            size={28}
            color="rgb(234, 179, 8)"
            onPress={survey.handleCloseSurvey}
          />
        </View>
      ) : null}
    </Pressable>
  );
}
