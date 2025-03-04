import {Image, Text, View} from "react-native";
import {StyleSheet} from "react-native";
import {Colors} from "@/constants/Colors";

interface UserInfoBox {
    firstName: string,
    lastName: string,
    promo: string,
    group: string,
}

const UserInfoBox = (
    {
        firstName,
        lastName,
        promo,
        group
    }: UserInfoBox) => {
    const initial = firstName.charAt(0) + lastName.charAt(0);
    const firstNameLowerCase = firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
    const lastNameLowerCase = lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();

    return (
        <View style={[styles.container, styles.box]}>
            <Image
                source={{
                    uri: `https://api.dicebear.com/9.x/initials/png?radius=50&backgroundColor=FBBA00&size=96&seed=${initial}`
                }}
                style={styles.avatar}
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{`${firstNameLowerCase} ${lastNameLowerCase}`}</Text>
                <Text style={styles.name}>{`${promo} - ${group}`}</Text>
            </View>
        </View>
    )
}

export default UserInfoBox;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: Colors["cardPressed"],
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    avatar: {
        width: 75,
        height: 75,
    },
    name: {
        marginTop: 8,
        fontSize: 20,
        fontWeight: "normal",
    },
    textContainer: {
        justifyContent: "flex-start",
        marginLeft: 20,
    },
    box: {
        marginHorizontal: 10,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.20,
        shadowRadius: 7,
        elevation: 3,
    },
});