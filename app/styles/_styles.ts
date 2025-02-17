import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

export const styleAuth = StyleSheet.create({
    textCenter: {
        textAlign: "center",
    },
});

export const stylesLayout = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },
    card: {
        width: "100%",
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        padding: 20,
    },
    logo: {
        flex: 1,
        justifyContent: "center",
    },
    logoMiniContainer: {
        position: "relative",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "90%",
        alignSelf: "center",
        marginBottom: 25,
    },
})

export const semesterChoiceStyles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    }
})

export const gradeCardStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        borderBottomColor: Colors["placeholder-color"],
        borderBottomWidth: 1,
        paddingVertical: 7,
    },
    gradeContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 7,
        backgroundColor: Colors["highlight-yellow"],
        color: Colors["background-color"],
        fontSize: 18,
        flex: 1,
        textAlign: "center",
    },
    coeffContainer: {
        textAlign: "center",
    },
    module: {
        fontSize: 17,
        textOverflow: "ellipsis",
    },
    controlName: {
        fontSize: 12,
        color: "#565656",
    },
    namesGrade: {
        justifyContent: "center",
        maxWidth: "75%",
    }
})