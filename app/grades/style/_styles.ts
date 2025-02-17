import {Colors} from "@/constants/Colors";
import {StyleSheet} from "react-native";

export const viewGradesModeStyle = StyleSheet.create({
    selectModeText: {
        fontSize: 20,
        textAlign: "center",
    },
    selectModeContainer: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 15,
    },
    textPressable: {
        width: "50%",
        paddingVertical: 10,
        borderBottomWidth: 3,
        borderBottomColor: "transparent",
    },
    textSelected: {
        borderBottomColor: Colors["success"],
        borderBottomWidth: 3,
    }
})