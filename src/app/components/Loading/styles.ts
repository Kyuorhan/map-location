import { colors } from "theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.base.gray600,
  },
  indicator: {
    color: colors.primary,
  },
});

export default styles;
