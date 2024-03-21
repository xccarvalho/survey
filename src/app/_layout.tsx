import "@/styles/global.css";
import { Slot } from "expo-router";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return;
  }
  return fontsLoaded ? (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: "rgb(250 250 250)" }}
    >
      <Slot />
    </GestureHandlerRootView>
  ) : null;
}
