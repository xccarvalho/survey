import "@/styles/global.css";
import { Slot, SplashScreen } from "expo-router";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return;
  }
  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: "rgb(250 250 250)" }}
    >
      <StatusBar style="light" />
      <Slot />
    </GestureHandlerRootView>
  );
}
