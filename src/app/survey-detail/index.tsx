import { Button } from "@/components/Button";
import { mocks } from "@/utils/mocks";
import classNames from "classnames";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, FlatList, Pressable, Text, View } from "react-native";

export default function SurveyDetail() {
  const surveyMock = mocks.survey;
  const [isSelected, setIsSelected] = useState(false);

  const goToHome = () => {
    router.navigate("/");
  };

  return (
    // <ScrollView contentContainerClassName="p-6">
    <View className="p-6">
      <Text className="font-bold text-2xl text-green-950">
        {surveyMock.title}
      </Text>
      <Text className="mb-6 border-b-2 border-gray-200 pb-6 font-regular text-green-950">
        {surveyMock.description}
      </Text>
      {surveyMock.surveyQuestions.map((question) => {
        return (
          <>
            <View className="mt-3">
              <FlatList
                data={["1"]}
                renderItem={() => (
                  <Text className="mb-2 font-bold text-base text-green-950">
                    {question.question}
                  </Text>
                )}
                keyExtractor={(item) => item}
              />
            </View>
            {question.questionOptions.map((option) => {
              return (
                <View className="mb-3 px-14">
                  <FlatList
                    data={["1"]}
                    renderItem={() => (
                      <Pressable
                        className={classNames(
                          "items-center justify-center rounded border border-green-950 py-2  text-green-950",
                          { "bg-green-950 text-white": isSelected },
                        )}
                        onPress={() => setIsSelected(!isSelected)}
                      >
                        {option.option}
                      </Pressable>
                    )}
                    keyExtractor={(item) => item}
                  />
                </View>
              );
            })}
          </>
        );
      })}
      <View className="mb-1 mt-7 flex-row justify-center">
        <Button variant="text" size="sm" title="Cancel" onPress={goToHome} />
        <Button
          variant="contained"
          size="sm"
          title="Send"
          onPress={() => Alert.alert("Thanks for answer!")}
        />
      </View>
    </View>
  );
}
