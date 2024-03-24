import { Alert, ScrollView } from "react-native";
import { SurveyCard } from "./SurveyCard";
import { useState } from "react";
import { ModalConfirm } from "./ModalConfirm";

export type SurveyListProps = {
  id: string;
  title: string;
}[];

type Props = {
  isAdmin?: boolean;
  surveyList?: SurveyListProps;
};

interface SurveyCardData {
  id: string;
  title: string;
}

export function SurveysList({ isAdmin, surveyList, ...rest }: Props) {
  const [surveyCard, setSurveyCard] = useState<SurveyCardData[]>([]);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalCloseVisible, setModalCloseVisible] = useState(false);

  const handleDeleteSurvey = (id: number) => {
    const updatedItems = surveyCard.filter((item) => Number(item.id) !== id);
    setSurveyCard(updatedItems);
  };

  const handleCloseSurvey = (id: number) => {
    Alert.alert("handleClose");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerClassName="gap-4"
      className="mx-auto max-h-[37.5rem] w-11/12"
    >
      {/* {SurveyList.map(({ id, title }) => (
        <Survey key={id} survey={{ title }} />
      ))} */}

      {Array.from({ length: 3 }).map((_survey, index) => (
        <SurveyCard
          {...rest}
          key={index}
          survey={{
            title: `${index + 1}  - Survey Title`,
            description:
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            isAdm: isAdmin,
            handleDeleteSurvey: () => setModalDeleteVisible(true),
            handleEditSurvey: () => console.log("handleEdit"),
            handleCloseSurvey: () => console.log("handleClose"),
          }}
        />
      ))}
      <ModalConfirm
        textContent={"Would you like to delete it?"}
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
    </ScrollView>
  );
}
