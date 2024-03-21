import { Alert, Text, View } from "react-native";
import { useRef, useState } from "react";
import Bottom from "@gorhom/bottom-sheet";
import { Input } from "@/components/Input";
import { BottomSheet } from "@/components/BottomSheet";
import { Button } from "@/components/Button";
import { BackButton } from "@/components/BackButton";
import { Header } from "@/components/Header";

export default function SurveyCreate() {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyDescription, setSurveyDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState("");

  // BOTTOM SHEET
  const bottomSheetRef = useRef<Bottom>(null);
  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  return (
    <View className="h-full">
      <Header variant="header" title="Create a survey" />
      <View className="px-6">
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
        <Button
          variant="contained"
          title={"Add question"}
          onPress={handleBottomSheetOpen}
        />

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={[0.01, 284]}
          title="New question"
          onClose={handleBottomSheetClose}
        >
          <Input
            placeholder="Question"
            onChangeText={setQuestion}
            value={question}
          />
          <Input placeholder="Option" onChangeText={setOption} value={option} />
          <Button
            variant="contained"
            title="Add new option"
            onPress={() => Alert.alert("Make that it create a new Input")}
          />
          <View className="flex-row justify-between">
            <BackButton title="Cancel" />
            <Button variant="contained" title="Save" />
          </View>
        </BottomSheet>
      </View>
    </View>
  );
}
