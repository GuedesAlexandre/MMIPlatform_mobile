import {useAuthStore} from "@/app/store/auth.store";
import {ScrollView, View} from "react-native";
import BackArrow from "@/app/components/ui/backArrow";
import SemesterChoice from "@/app/components/semesterChoice";
import {useMemo, useState} from "react";
import ViewGradesMode from "@/app/grades/components/viewGradesMode";
import ViewRecentGrades from "@/app/grades/components/viewRecentGrades";
import ViewGradesByModule from "@/app/grades/components/viewGradesByModule";
import TotalAverage from "@/app/grades/components/totalAverage";

const GradesScreen = () => {
    const {user} = useAuthStore();

    const promo = user?.user.promo ?? "";
    const semesters = useMemo(() => {
        const year = parseInt(promo.slice(-1));
        return year ? [year * 2 - 1, year * 2] : [1, 2];
    }, [promo]);
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
                        : <ViewGradesByModule semesterSelected={String(semesterSelected)}/>
                }
            </ScrollView>
            {
                selectedMode === "module" &&
                <TotalAverage semesterSelected={String(semesterSelected)}/>
            }
        </View>
    );
}

export default GradesScreen;
