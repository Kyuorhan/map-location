import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@/app/screen/Home";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
