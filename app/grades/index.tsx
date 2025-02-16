import {useAuthStore} from "@/app/store/auth.store";
import {Pressable, Text, View} from "react-native";
import {Button} from "react-native-magnus";
import {useRouter} from "expo-router";

const GradesScreen = () => {
    const router = useRouter();
    const {user} = useAuthStore();
    return (
        <View>
            <Text>Grades Screen de {`${user?.user.firstName} ${user?.user.name}`} !</Text>
            <Pressable>
                <Button onPress={() => router.push("/home")}>Temp button Home</Button>
            </Pressable>
        </View>
    );
}

export default GradesScreen;