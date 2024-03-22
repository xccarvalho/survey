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
          borderColor: "rgb(244 244 245)",
          backgroundColor: "rgb(5 46 22)",
        }}
        handleComponent={() => null}
      >
        <View className="gap-4 p-8">
          <View className="flex-row justify-between">
            <Text className="font-bold text-lg text-zinc-100">{title}</Text>
            <MaterialIcons
              name="close"
              size={24}
              color="rgb(244 244 245)"
              onPress={onClose}
            />
          </View>
          {children}
        </View>
      </Bottom>
    );
  },
);
