import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";

type Props = {
  title: string;
  children: any;
};

const CollapsibleView = ({ title, children }: Props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [animation] = useState(new Animated.Value(0));

  const toggleCollapse = () => {
    if (collapsed) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setCollapsed(!collapsed);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 540],
  });

  return (
    <View>
      <TouchableWithoutFeedback onPress={toggleCollapse}>
        <View className="mb-2 flex-row items-center justify-between">
          <Text className="font-bold text-2xl text-green-950">{title}</Text>
          {collapsed ? (
            <MaterialIcons
              name="keyboard-arrow-right"
              size={32}
              color={"rgb(5, 46, 22)"}
            />
          ) : (
            <MaterialIcons
              name="keyboard-arrow-down"
              size={32}
              color={"rgb(5, 46, 22)"}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={{ height: heightInterpolate }}>
        {children}
      </Animated.View>
    </View>
  );
};

export default CollapsibleView;
