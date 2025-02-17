import {useAuthStore} from "@/app/store/auth.store";
import {ScrollView, View} from "react-native";
import BackArrow from "@/app/components/ui/backArrow";
import SemesterChoice from "@/app/components/semesterChoice";
import {useState} from "react";
import ViewGradesMode from "@/app/grades/components/viewGradesMode";
import ViewRecentGrades from "@/app/grades/components/viewRecentGrades";
import ViewGradesByModule from "@/app/grades/components/viewGradesByModule";

const GradesScreen = () => {
    const {user} = useAuthStore();

    const promo = user?.user.promo ?? "";
    const year = parseInt(promo.slice(-1));
    const semesters = year ? [year * 2 - 1, year * 2] : [1, 2];
    const [semesterSelected, setSemesterSelected] = useState<number>(semesters[0])
    const [selectedMode, setSelectedMode] = useState<"recent" | "module">("recent");

    const handlePressArrow = (action: "prev" | "next") => {
        setSemesterSelected((prev) =>
            action === "prev" ? semesters[0] : semesters[1]
        );
    }

    return (
        <View style={{flex: 1}}>
            <BackArrow/>
            <SemesterChoice handlePressArrow={handlePressArrow} semesterSelected={semesterSelected}/>
            <ViewGradesMode selectedMode={selectedMode} handlePressMode={setSelectedMode}/>
            <ScrollView
                style={{flex: 1, marginTop: 15}}
                showsVerticalScrollIndicator={false}
            >
                {
                    selectedMode === "recent"
                        ? <ViewRecentGrades semesterSelected={String(semesterSelected)}/>
                        : <ViewGradesByModule />
                }
            </ScrollView>

        </View>
    );
}

export default GradesScreen;
