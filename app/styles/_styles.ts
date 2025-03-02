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
        borderBottomColor: "#e3e3e3",
        borderBottomWidth: 1,
        paddingVertical: 7,
        paddingHorizontal: 7
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
        color: "#565656",
    },
    namesGrade: {
        justifyContent: "center",
        maxWidth: "75%",
    }
})

export const absenceCardStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 7,
        paddingVertical: 7,
        borderBottomColor: "#e3e3e3",
        borderBottomWidth: 1,
    },
    textContainer: {
        flexDirection: "column",
        width: "100%",
        paddingLeft: 10,
        paddingRight: 20,
    },
    subContainer: {
        flexDirection: "row",
    },
    headText: {
        fontSize: 18,
    },
    bottomText: {
        fontSize: 14,
        marginTop: 7
    }
})

export const drawerStyles = StyleSheet.create({
    container: {
        backgroundColor: Colors["background-color"],
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingTop: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    content: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors["text-color-black"],
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        color: Colors["text-color-black"],
        lineHeight: 22,
        marginBottom: 20,
    },
    icon: {
        position: 'absolute',
        right: 0,
    },
    containerInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginHorizontal: "auto",
        marginTop: 10,
    },
    resourceNameText: {
        fontSize: 18,
        fontWeight: 'medium',
        marginTop: 20,
    },
    controleNameText: {
        fontSize: 18,
        marginTop: 7.5,
    }
})