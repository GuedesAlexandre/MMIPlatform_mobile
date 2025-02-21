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

export const viewGradesStyle = StyleSheet.create({
    textAnyControl: {
        fontSize: 18,
        textAlign: "center",
        color: Colors["placeholder-color"],
    },
    textAnyControlContainer: {
        marginTop: 25,
    }
})

export const accordionStyles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 7,
        borderBottomColor: "#e3e3e3",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitleContainer: {
        width: "75%"
    },
    headerText: {
        fontSize: 18,
    },
    headerAverageIconContainer: {
        width: "25%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    }
})

export const totalAverageStyle = StyleSheet.create({
    container: {
        paddingVertical: 25,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
    },
    totalAverageText: {
        fontSize: 20,
    }
})