import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
    justifyContent: "center",
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    color: "#0cd891",
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Poppins_400Regular",
    maxWidth: 240,
  },
  okButton: {
    marginVertical: 40,
    backgroundColor: "#09c37f",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  okButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
  },
});

export default styles;
