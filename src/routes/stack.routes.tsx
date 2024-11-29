import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "app/screen/Home";
import LocationMap from "app/screen/LocationMap";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, fontFamily, fontSize } from "theme";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: true,
        // statusBarColor: "transparent",
        statusBarTranslucent: true,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: "Início",
          headerTitle: "Início",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.base.gray100,
            fontFamily: fontFamily.poppins.bold,
            fontSize: fontSize.xl,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => alert("This is a button!")}
            >
              <Ionicons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="LocationMap"
        component={LocationMap}
        options={{
          // animation: "default",
          title: "Minha localização",
          // headerTitle: "Minha localização",
          statusBarStyle: "dark",
          headerShown: true,
          headerTransparent: true,
          headerTitleAlign: "center",
          statusBarColor: "transparent",
          statusBarTranslucent: true,
          statusBarAnimation: "slide",
        }}
      />
    </Stack.Navigator>
  );
}

//  <Stack.Screen name="Home" component={Home} />
