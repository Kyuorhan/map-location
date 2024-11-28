import { SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./src/app/screen/Home";
import * as Font from "expo-font";
import {
  useFonts as userFontPoppins,
  Poppins_900Black,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import {
  useFonts as userFontsInter,
  Inter_900Black,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { Loading } from "@/app/components/Loading";

export default function App() {
  const [fontsLoaded] =
    userFontPoppins({
      Poppins_900Black,
      Poppins_700Bold,
      Poppins_600SemiBold,
      Poppins_500Medium,
      Poppins_400Regular,
    }) &&
    userFontsInter({
      Inter_900Black,
      Inter_700Bold,
      Inter_600SemiBold,
      Inter_500Medium,
      Inter_400Regular,
    });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
