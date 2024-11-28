import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
import { colors } from "@/theme";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={colors.brand.blue} />
    </View>
  );
}
