import GradeCard from "@/app/components/ui/gradeCard";
import {useEffect, useRef, useState} from "react";
import {Note} from "@/app/models/userInformation.model";
import {useUserInformation} from "@/app/store/userInformation.store";
import {Text, View} from "react-native";
import {viewGradesStyle} from "@/app/grades/style/_styles";
import {DropdownRef} from "react-native-magnus";

const ViewRecentGrades = (
    {
        semesterSelected
    }: {
        semesterSelected: string
    }
) => {
    const {userInformation} = useUserInformation()
    const [gradesBySemester, setGradesBySemester] = useState<Note[] | undefined>([]);
    const maxVisibleCards = 15;
    const dropdownRef = useRef<DropdownRef | null>(null);

    useEffect(() => {
        const gradesBySemester = userInformation?.notes.filter((note) =>
            note.module.semester === semesterSelected).reverse();
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
        setGradesBySemester(uniqueGrades.slice(0, maxVisibleCards));
    }, [userInformation, semesterSelected]);

    const handleViewDropDown = () => {
        if (dropdownRef.current) {
            dropdownRef.current.open();
        }
    };

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
                <GradeCard
                    key={key}
                    grade={grade.note}
                    module={grade.module.name}
                    controlName={grade.name}
                    onPress={handleViewDropDown}
                />
            )
        })
    )
}

export default ViewRecentGrades;