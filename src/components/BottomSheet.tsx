import { MaterialIcons } from "@expo/vector-icons";
import Bottom from "@gorhom/bottom-sheet";
import { ReactNode, forwardRef } from "react";
import { Text, View } from "react-native";

export type Props = {
  onClose: () => void;
  snapPoints: number[];
  title: string;
  children: ReactNode;
};

export const BottomSheet = forwardRef<Bottom, Props>(
  ({ onClose, snapPoints, title, children }, ref) => {
    return (
      <Bottom
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{
          borderWidth: 1,
          borderColor: "border-gray-400",
          backgroundColor: "bg-gray-700",
        }}
        handleComponent={() => null}
      >
        <View className="gap-4 p-8">
          <View className="flex-row">
            <Text>{title}</Text>
            <MaterialIcons
              name="close"
              size={24}
              color={"text-gray-300"}
              onPress={onClose}
            />
          </View>
          {children}
        </View>
      </Bottom>
    );
  },
);
