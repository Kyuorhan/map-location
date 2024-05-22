
import { SafeAreaView, StyleSheet } from "react-native";
import theme from "./src/styles/theme";
import HomeScreen from "./src/app/screen/Home";

import {
  useFonts as userFontPoppins,
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import {
  useFonts as userFontsInter,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { Loading } from "@/app/components/Loading";

export default function App() {
  const [poppinsLoaded] = userFontPoppins({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_400Regular,
  });
  const [interLoaded] = userFontsInter({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });

  if (!poppinsLoaded || !interLoaded) {
    return <Loading />;
  }

  return  (
    <SafeAreaView style={styles.container}>
      {poppinsLoaded && interLoaded 
        ? ( <HomeScreen /> ) 
        : null
      }      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
