import {useAuthStore} from "@/app/store/auth.store";
import {Pressable, Text, View} from "react-native";
import {Button} from "react-native-magnus";
import {useRouter} from "expo-router";
import BackArrow from "@/app/components/ui/backArrow";
import SemesterChoice from "@/app/components/semesterChoice";
import {useState} from "react";

const GradesScreen = () => {
    const router = useRouter();
    const {user} = useAuthStore();

    const promo = user?.user.promo ?? "";
    const year = parseInt(promo?.replace(/\D/g, ""), 10);
    const semesters = year ? [year * 2 - 1, year * 2] : [1, 2];
    const [semesterSelected, setSemesterSelected] = useState<number>(semesters[0])

    const handlePressArrow = (action: "prev" | "next") => {
        setSemesterSelected((prev) =>
            action === "prev" ? semesters[0] : semesters[1]
        );
    }

    return (
        <View>
            <BackArrow />
            <SemesterChoice handlePressArrow={handlePressArrow} semesterSelected={semesterSelected}/>
        </View>
    );
}

export default GradesScreen;