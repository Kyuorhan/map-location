import { fontSize } from "theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // backgroundColor: theme.colors.base.gray100,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default styles;
