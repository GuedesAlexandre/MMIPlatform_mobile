import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

export const homeStyles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 20,
        marginRight: 10,
        color: Colors["text-color-black"],
    },
})