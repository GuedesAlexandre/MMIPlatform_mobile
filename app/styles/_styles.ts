import {Colors} from "@/constants/Colors";
import {StyleSheet} from "react-native";

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
