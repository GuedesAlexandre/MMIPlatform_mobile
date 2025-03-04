import {Note, UserInformation} from "@/app/models/userInformation.model";

export const getRecentGradesBySemester = (maxVisibleCards: number, semesterSelected: string, userInformation?: UserInformation) => {
    if (!userInformation) return [];
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
        if (!exists) uniqueGrades.push(grade);
    })

    return uniqueGrades.slice(0, maxVisibleCards);
}

export const getRecentGrades = (maxVisibleCards: number, userInformation?: UserInformation) => {
    if (!userInformation) return [];
    const uniqueGrades: Note[] = [];
    userInformation?.notes.forEach((grade)=>{
        const exists = uniqueGrades.some(
            (existsGrade) =>
                existsGrade.name === grade.name &&
                existsGrade.module.name === grade.module.name &&
                existsGrade.module.ueName !== grade.module.ueName
        )
        if (!exists) uniqueGrades.push(grade);
    })

    return uniqueGrades.slice(0, maxVisibleCards);
}