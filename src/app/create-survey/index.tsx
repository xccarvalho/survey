import { Alert, ScrollView, Text, View } from "react-native";
import { useRef, useState } from "react";
import { router } from "expo-router";
import Bottom from "@gorhom/bottom-sheet";
import { Input } from "@/components/Input";
import { BottomSheet } from "@/components/BottomSheet";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { mocks } from "@/utils/mocks";

interface InputData {
  id: number;
  value: string;
}

export default function CreateSurvey() {
  const survey = mocks.survey;
  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyDescription, setSurveyDescription] = useState("");
  const [question, setQuestion] = useState("");

  // BOTTOM SHEET
  const bottomSheetRef = useRef<Bottom>(null);
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  //ADD AND DELETE INPUT OPTIONS
  const [inputsOption, setInputsOption] = useState<InputData[]>([]);
  const [inputCount, setInputCount] = useState<number>(1);

  const addInput = () => {
    const newInput: InputData = {
      id: inputCount,
      value: "",
    };
    setInputCount((prevCount) => prevCount + 1);
    setInputsOption((prevInputs) => [...prevInputs, newInput]);
  };
  const deleteInput = (id: number) => {
    setInputsOption((prevInputs) =>
      prevInputs.filter((inputOp) => inputOp.id !== id),
    );
  };
  const handleInputChange = (text: string, id: number) => {
    setInputsOption((prevInputs) =>
      prevInputs.map((inputOp) =>
        inputOp.id === id ? { ...inputOp, value: text } : inputOp,
      ),
    );
  };

  function goToAdm() {
    router.navigate("../adm/");
  }

  return (
    <View className="flex-1">
      <Header variant="header" title="Create a survey" />
      <View className="gap-2 px-6 pt-4">
        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-xl text-green-950">Survey title</Text>
          <Button
            title={survey.isClosed ? "Activate" : "Disable"}
            iconEnd={"toggle-on"}
          />
        </View>
        <Input
          placeholder="Survey title"
          onChangeText={setSurveyTitle}
          value={surveyTitle}
        />
        <Text className="font-bold text-xl text-green-950">
          Survey description
        </Text>
        <Input
          placeholder="Survey description"
          onChangeText={setSurveyDescription}
          value={surveyDescription}
        />

        <View className="mt-8">
          <Button
            variant="text"
            iconStart="add-circle"
            title="Question"
            onPress={handleBottomSheetOpen}
          />
        </View>
        <View className="flex-row justify-between gap-4">
          <Button variant="text" title="Cancel" onPress={goToAdm} />
          <View className="flex-row gap-4 self-end">
            <Button variant="outlined" size="sm" title="Save" />
            <Button
              size="sm"
              variant="contained"
              title="Publish"
              onPress={() =>
                Alert.alert("Your survey was published! Go to the SURVEY")
              }
            />
          </View>
        </View>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[0.01, 644]}
        title="New question"
        onClose={handleBottomSheetClose}
      >
        <Text className="font-bold text-xl text-zinc-100">
          Question description
        </Text>
        <Input
          placeholder="Question"
          onChangeText={setQuestion}
          value={question}
        />
        <Text className="font-bold text-xl text-zinc-100">
          Set question options
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={true}
          contentContainerClassName="gap-1"
          className="max-h-[300px]"
        >
          {inputsOption.map((inputOp) => (
            <Input
              endIcon
              placeholder="Type an option.."
              key={inputOp.id}
              value={inputOp.value}
              onChangeText={(text) => handleInputChange(text, inputOp.id)}
              handleDelete={() => deleteInput(inputOp.id)}
            />
          ))}
        </ScrollView>

        <View className="">
          <Button
            bgDark
            variant="text"
            iconStart="add-circle"
            title="Option"
            onPress={addInput}
          />
        </View>
        <View className="mb-2 flex-row justify-between">
          <Button
            bgDark
            size="sm"
            variant="text"
            title="Cancel"
            onPress={handleBottomSheetClose}
          />
          <Button bgDark size="sm" variant="outlined" title="Save" />
        </View>
      </BottomSheet>
    </View>
  );
}
