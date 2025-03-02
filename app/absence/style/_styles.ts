import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

export const absenceSummaryStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderWidth: 0.25,
        borderRadius: 15,
        borderColor: Colors["placeholder-color"],
        marginTop: 15,
    },
    principalText: {
        fontSize: 20,
        fontWeight: "medium",
    },
    subText: {
        fontSize: 16,
        fontWeight: "normal",
        marginTop: 7,
    },
})