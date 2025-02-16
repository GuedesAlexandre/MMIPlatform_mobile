import {Pressable, View} from "react-native";
import {MoveLeft} from "lucide-react-native";
import {useRouter} from "expo-router";
import {Colors} from "@/constants/Colors";

const BackArrow = () => {
    const router = useRouter();

    const handlePressBack = () => {
        router.back()
    }

    return (
        <Pressable onPress={handlePressBack}>
            <View>
                <MoveLeft color={Colors["primary-blue"]} size={42} strokeWidth={1.5}/>
            </View>
        </Pressable>
    )
}

export default BackArrow;