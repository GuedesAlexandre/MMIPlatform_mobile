import {useAuthStore} from "@/app/store/auth.store";
import {ScrollView, View} from "react-native";
import BackArrow from "@/app/components/ui/backArrow";
import SemesterChoice from "@/app/components/semesterChoice";
import {useEffect, useMemo, useState} from "react";
import ViewGradesMode from "@/app/grades/components/viewGradesMode";
import ViewRecentGrades from "@/app/grades/components/viewRecentGrades";
import ViewGradesByModule from "@/app/grades/components/viewGradesByModule";
import TotalAverage from "@/app/grades/components/totalAverage";
import {globalAverage} from "@/app/grades/helper/average";
import {useUserInformation} from "@/app/store/userInformation.store";
import {useModuleStore} from "@/app/store/module.store";
import {Module} from "@/app/models/userInformation.model";

const GradesScreen = () => {
    const {user} = useAuthStore();
    const {userInformation} = useUserInformation();
    const {allModules, fetchModules} = useModuleStore();

    const promo = user?.user.promo ?? "";
    const semesters = useMemo(() => {
        const year = parseInt(promo.slice(-1));
        return year ? [year * 2 - 1, year * 2] : [1, 2];
    }, [promo]);
    const [semesterSelected, setSemesterSelected] = useState<number>(semesters[0])
    const [selectedMode, setSelectedMode] = useState<"recent" | "module">("recent");
    const [modulesBySemester, setModulesBySemester] = useState<Module[] | undefined>(undefined);

    useEffect(() => {
        fetchModules();
        setModulesBySemester(allModules?.filter((module) => module.semester === String(semesterSelected)));
    }, []);
    const globalStudentAverage = globalAverage(modulesBySemester, userInformation)

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
                <TotalAverage globalAverage={globalStudentAverage}/>
            }
        </View>
    );
}

export default GradesScreen;
