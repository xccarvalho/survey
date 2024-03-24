import { MaterialIcons } from "@expo/vector-icons";
import classNames from "classnames";
import { useState } from "react";
import {
  Alert,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { ModalConfirm } from "./ModalConfirm";

type Props = TextInputProps & {
  endIcon?: boolean;
  handleDelete?: () => void;
};

export function Input({ endIcon = false, handleDelete, ...rest }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="flex-row items-center gap-2">
      <TextInput
        placeholderTextColor="#d1d5db"
        className={classNames(
          "h-14 w-full rounded-lg border border-green-950 bg-white p-4 font-regular text-base text-green-950",
          { relative: endIcon },
        )}
        {...rest}
      />
      {endIcon ? (
        <View>
          <ModalConfirm
            textContent={"Would you like to delete it?"}
            handleConfirm={handleDelete}
            modalVisible={modalVisible}
            setModalVisible={() => {
              Alert.alert("Modal has been closed!");
              setModalVisible(!modalVisible);
            }}
            onPressCancelBtn={() => setModalVisible(!modalVisible)}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setModalVisible(true)}
            className="absolute -top-3 right-5 "
          >
            <MaterialIcons
              name="delete-forever"
              size={26}
              color={"rgb(127 29 29)"}
              className="ml-2"
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
