import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
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
import { Loading } from "app/components/Loading";
import Routes from "routes";

// Certifique-se de que enableScreens é chamado antes de qualquer navegação
enableScreens();

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
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
