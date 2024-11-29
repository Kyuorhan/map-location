import { ScrollView, View } from "react-native";
import styles from "./styles";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface HomeProps {
  navigation: NavigationProp<ParamListBase>;
}

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }} />
    </View>
  );
}
