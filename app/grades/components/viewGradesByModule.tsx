import {Text, View} from "react-native";
import {useUserInformation} from "@/app/store/userInformation.store";
import {useEffect, useState} from "react";
import {Note} from "@/app/models/userInformation.model";
import {viewGradesStyle} from "@/app/grades/style/_styles";
import GradeCard from "@/app/components/ui/gradeCard";
import AccordionGrade from "@/app/grades/components/accordionGrade";

const ViewGradesByModule = (
    {
        semesterSelected
    }: {
        semesterSelected: string
    }
) => {
    const {userInformation} = useUserInformation()
    const [gradesBySemester, setGradesBySemester] = useState<Note[] | undefined>([]);

    useEffect(() => {
        const gradesBySemester = userInformation?.notes.filter((note) =>
            note.module.semester === semesterSelected);
        const uniqueGrades: Note[] = [];
        gradesBySemester?.forEach((grade) => {
            const exists = uniqueGrades.some(
                (existsGrade) =>
                    existsGrade.name === grade.name &&
                    existsGrade.module.name === grade.module.name &&
                    existsGrade.module.ueName !== grade.module.ueName
            )
            if (!exists) {
                uniqueGrades.push(grade);
            }
        })
        setGradesBySemester(uniqueGrades);
    }, [userInformation, semesterSelected]);

    if (gradesBySemester?.length === 0) {
        return (
            <View style={viewGradesStyle.textAnyControlContainer}>
                <Text style={viewGradesStyle.textAnyControl}>
                    Pas de contrôle pour l'instant.
                </Text>
            </View>
        )
    }

    return (
        gradesBySemester?.map((grade, key) => {
            return (
                <Text key={key}>
                    {grade.note}
                </Text>
                // <AccordionGrade gradesModuleName={} grades={grade} />
            )
        })
    )
}

export default ViewGradesByModule;