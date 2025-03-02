import {Pressable, Text, View} from "react-native";
import {useAuthStore} from "@/app/store/auth.store";
import {useRouter} from "expo-router";
import {Button} from "react-native-magnus";
import {useUserInformation} from "@/app/store/userInformation.store";
import {useEffect} from "react";
import useSignatureSheets from "@/app/store/signatureSheet.store";

const HomeScreen = () => {
    const router = useRouter();
    const {user} = useAuthStore()
    const {getUserInformation} = useUserInformation();
    const {fetchSignatureSheets} = useSignatureSheets()

    useEffect(() => {
        getUserInformation(user?.user.numEtu)
        fetchSignatureSheets(user?.user.promo, user?.user.numEtu)
    }, [user]);

    return (
        <View>
            <Text>Home Screen de {`${user?.user.firstName} ${user?.user.name}`} !</Text>
            <Pressable>
                <Button onPress={() => router.push("/grades")}>Temp button grades</Button>
            </Pressable>
            <Pressable>
                <Button onPress={() => router.push("/absence")}>Temp button Miss</Button>
            </Pressable>
        </View>
    );
};

export default HomeScreen;
