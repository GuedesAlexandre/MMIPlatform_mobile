import GradeCard from "@/app/components/ui/gradeCard";
import {useEffect, useState} from "react";
import {Note} from "@/app/models/userInformation.model";
import {useUserInformation} from "@/app/store/userInformation.store";
import {Text, View} from "react-native";
import {viewGradesStyle} from "@/app/grades/style/_styles";
import {getRecentGradesBySemester} from "@/app/home/helper/recentGrades";

const ViewRecentGrades = (
    {
        semesterSelected
    }: {
        semesterSelected: string
    }
) => {
    const {userInformation} = useUserInformation()
    const [gradesBySemester, setGradesBySemester] = useState<Note[] | undefined>([]);

    useEffect(() => {
        setGradesBySemester(getRecentGradesBySemester(15, semesterSelected, userInformation))
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
                <GradeCard
                    key={key}
                    grade={grade}
                />
            )
        })
    )
}

export default ViewRecentGrades;