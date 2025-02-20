import {Module, Note, UserInformation} from "@/app/models/userInformation.model";

export const average = (grades: Note[]) => {
    if (grades.length === 0) return 0;

    let totalWeighted = 0;
    let totalCoefficients = 0;

    grades.forEach(({note, coeff}) => {
        totalWeighted += note * coeff;
        totalCoefficients += coeff;
    });

    return totalCoefficients > 0
        ? (totalWeighted / totalCoefficients)
        : 0;
}

export const globalAverage = (
    modules: Module[] | undefined,
    student: UserInformation | undefined,
) => {
    if (!modules || modules.length === 0) return 0;

    const ueAverages: Record<string, { total: number; coeff: number }> = {};

    modules.forEach((module) => {
        if (!ueAverages[module.ueName]) {
            ueAverages[module.ueName] = {total: 0, coeff: 0};
        }
        const studentNote = student?.notes.find((note) => note.module.name === module.name);
        const noteValue = studentNote ? studentNote.note : 0;
        ueAverages[module.ueName].total += noteValue * module.coeff;
        ueAverages[module.ueName].coeff += module.coeff;
    });

    let totalUEAverage = 0;
    let totalUECoeff = 0;

    Object.values(ueAverages).forEach(({total, coeff}) => {
        if (coeff > 0) {
            const ueAverage = total / coeff;
            totalUEAverage += ueAverage * coeff;
            totalUECoeff += coeff;
        }
    });

    return totalUECoeff > 0 ? totalUEAverage / totalUECoeff : 0;
};