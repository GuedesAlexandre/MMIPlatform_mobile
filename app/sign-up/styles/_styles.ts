import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  titleBox: {
    paddingTop: 15,
  },
  input: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors["primary-blue"],
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginTop: 20,
  },
  inputIcon: {
    marginRight: 8,
  },
});
