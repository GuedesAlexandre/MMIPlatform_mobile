import GradeCard from "@/app/components/ui/gradeCard";
import {useEffect, useState} from "react";
import {Note} from "@/app/models/userInformation.model";
import {useUserInformation} from "@/app/store/userInformation.store";

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
        setGradesBySemester(uniqueGrades.reverse().slice(0, maxVisibleCards));
    }, [userInformation, semesterSelected]);

    return (
        gradesBySemester?.map((grade, key) => {
            return (
                <GradeCard
                    key={key}
                    grade={grade.note}
                    module={grade.module.name}
                    controlName={grade.name}
                    coeff={grade.coeff}
                />
            )
        })
    )
}

export default ViewRecentGrades;