import { ScrollView, View } from "react-native";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import CollapsibleView from "@/components/CollapsibleView";
import { BackButton } from "@/components/BackButton";

import { router } from "expo-router";
import { Surveys, SurveysProps } from "@/components/Surveys";
import { useEffect, useState } from "react";
import { mocks } from "@/utils/mocks";
import { ModalConfirm } from "@/components/ModalConfirm";

export default function Adm() {
  const [surveys, setSurveys] = useState<SurveysProps>([]);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalCloseVisible, setModalCloseVisible] = useState(false);
  // const surveyTitle = surveys.filter((item) => item.title);

  async function fetchSurveys() {
    try {
      const response = mocks.surveysCardArr;
      setSurveys(
        response.map((item) => ({
          ...item,
          isAdm: true,
          questions: [],
          handleEditSurvey: goToCreateSurveyScreen,
          handleDeleteSurvey: () => setModalDeleteVisible(true),
          handleCloseSurvey: () => setModalCloseVisible(true),
          handlePress: goToDetailSurveyScreen,
        })),
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteSurvey(id: number) {
    try {
      const response = mocks.surveysCardArr;
      const updatedItems = response.filter((item) => Number(item.id) !== id);
      setSurveys(updatedItems);
      setModalDeleteVisible(!modalDeleteVisible);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCloseSurvey(isClosed: boolean) {
    try {
      const response = mocks.surveysCardArr;
      const updatedItems = response.filter(
        (item) => item.isClosed !== isClosed,
      );
      setSurveys(updatedItems);
    } catch (error) {
      console.log(error);
    }
  }

  function goToCreateSurveyScreen() {
    router.navigate("../create-survey");
  }
  function goToDetailSurveyScreen() {
    router.navigate("../create-survey");
  }

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <View className="flex-1">
      <Header variant="header" title="Adm" />
      <View className="mb-4 flex flex-row items-center justify-between pr-6">
        <BackButton title="Back" />
        <Button title="Create Survey" onPress={goToCreateSurveyScreen} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={true}
        contentContainerClassName="gap-4"
        className="px-6"
      >
        <CollapsibleView title="Active Surveys">
          <Surveys surveys={surveys} />
        </CollapsibleView>
        <CollapsibleView title="Closed Surveys">
          <Surveys surveys={surveys} />
        </CollapsibleView>
      </ScrollView>
      <ModalConfirm
        textContent={`Would you like to delete it?`}
        handleConfirm={handleDeleteSurvey}
        modalVisible={modalDeleteVisible}
        setModalVisible={() => setModalDeleteVisible(!modalDeleteVisible)}
        onPressCancelBtn={() => setModalDeleteVisible(!modalDeleteVisible)}
      />
      <ModalConfirm
        textContent={"Would you like to close it?"}
        handleConfirm={handleCloseSurvey}
        modalVisible={modalCloseVisible}
        setModalVisible={() => setModalCloseVisible(!modalCloseVisible)}
        onPressCancelBtn={() => setModalCloseVisible(!modalCloseVisible)}
      />
    </View>
  );
}
