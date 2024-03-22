import { Text, View, Modal } from "react-native";
import { Button } from "./Button";

type Props = {
  textContent: string;
  handleConfirm: any;
  modalVisible: boolean;
  setModalVisible: () => void;
  onPressCancelBtn: () => void;
};
export function ModalConfirm({
  textContent,
  handleConfirm,
  modalVisible,
  setModalVisible,
  onPressCancelBtn,
}: Props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={setModalVisible}
    >
      <View className="flex-1 items-center justify-center">
        <View className="items-center gap-5 rounded-lg bg-white px-6 py-4 shadow ring-offset-4">
          <Text className="text-center">{textContent}</Text>
          <View className="flex-row justify-between">
            <Button variant="text" title="Cancel" onPress={onPressCancelBtn} />
            <Button variant="text" title="Yes" onPress={handleConfirm} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
