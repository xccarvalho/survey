import { ScrollView, Text, View } from "react-native";
import { useRef, useState } from "react";
import Bottom from "@gorhom/bottom-sheet";
import { Input } from "@/components/Input";
import { BottomSheet } from "@/components/BottomSheet";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";

interface InputData {
  id: number;
  value: string;
}

export default function SurveyCreate() {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyDescription, setSurveyDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState("");

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

  return (
    <View className="flex-1">
      <Header variant="header" title="Create a survey" />
      <View className="gap-2 px-6 pt-4">
        <Text className="font-bold text-xl text-green-950">Survey title</Text>
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
        <View className="mt-12">
          <Button
            variant="contained"
            title="Add question"
            onPress={handleBottomSheetOpen}
          />
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
          <Button title="Add Input" onPress={addInput} />
        </ScrollView>

        <View className="self-end">
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
            variant="text"
            title="Cancel"
            onPress={handleBottomSheetClose}
          />
          <Button variant="contained" title="Save" />
        </View>
      </BottomSheet>
    </View>
  );
}
