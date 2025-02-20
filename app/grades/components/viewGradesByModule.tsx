import {Text, View} from "react-native";
import {useUserInformation} from "@/app/store/userInformation.store";
import {useEffect, useState} from "react";
import {Note} from "@/app/models/userInformation.model";
import {viewGradesStyle} from "@/app/grades/style/_styles";
import AccordionGrade from "@/app/grades/components/accordionGrade";

const ViewGradesByModule = ({
                                semesterSelected
                            }: {
    semesterSelected: string;
}) => {
    const {userInformation} = useUserInformation();
    const [gradesByModule, setGradesByModule] = useState<Map<string, Note[]>>(new Map());

    useEffect(() => {
        const gradesBySemester = userInformation?.notes.filter((note) =>
            note.module.semester === semesterSelected
        );
        const groupedGrades = new Map<string, Note[]>();

        gradesBySemester?.forEach((grade) => {
            const moduleName = grade.module.name;
            if (!groupedGrades.has(moduleName)) {
                groupedGrades.set(moduleName, []);
            }
            const exists = groupedGrades.get(moduleName)?.some(
                (existsGrade) =>
                    existsGrade.name === grade.name &&
                    existsGrade.module.name === grade.module.name &&
                    existsGrade.module.ueName !== grade.module.ueName
            )
            if (!exists) groupedGrades.get(moduleName)?.push(grade);
        });

        setGradesByModule(groupedGrades);
    }, [userInformation, semesterSelected]);

    if (gradesByModule.size === 0) {
        return (
            <View style={viewGradesStyle.textAnyControlContainer}>
                <Text style={viewGradesStyle.textAnyControl}>
                    Pas de contrôle pour l'instant.
                </Text>
            </View>
        );
    }

    return (
        <View>
            {Array.from(gradesByModule.entries())
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([moduleName, grades], index) => (
                <View key={index}>
                    <AccordionGrade gradesModuleName={moduleName} grades={grades} />
                </View>
            ))}
        </View>
    );
}

export default ViewGradesByModule;