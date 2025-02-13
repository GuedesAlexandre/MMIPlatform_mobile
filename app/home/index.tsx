import {Pressable, Text, View} from "react-native";
import {useAuthStore} from "@/app/store/auth.store";
import {useRouter} from "expo-router";
import {Button} from "react-native-magnus";

const HomeScreen = () => {
    const router = useRouter();
    const {user} = useAuthStore()
    return (
        <View>
            <Text>Home Screen de {`${user?.user.firstName} ${user?.user.name}`} !</Text>
            <Pressable>
                <Button onPress={() => router.push("/grades")}>GO to grades</Button>
            </Pressable>
        </View>
    );
};

export default HomeScreen;
