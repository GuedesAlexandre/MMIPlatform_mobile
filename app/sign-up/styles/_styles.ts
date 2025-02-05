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
  button: {
    borderRadius: 5,
    width: "100%",
    paddingVertical: 2.5,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogin: {
    alignSelf: "flex-start",
    marginHorizontal: "auto",
    marginTop: 15,
  },
  textLogin: {
    fontSize: 15,
    color: Colors["text-color-black"],
  },
  navigationBallsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  iconSignUpCallback: {
    marginHorizontal: "auto",
    marginTop: 50,
  },
  titleSignUpCallback: {
    fontSize: 32,
    fontWeight: "bold",
  },
  textSignUpCallback: {
    textAlign: "center",
    fontSize: 17,
    color: Colors["primary-blue"],
    marginTop: 20,
  }
});
