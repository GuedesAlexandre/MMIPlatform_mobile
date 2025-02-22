import {SignatureSheet} from "@/app/models/signatureSheet.model";
import {Presence} from "@/app/models/enum/presence.enum";
import {Justification} from "@/app/models/enum/justification.enum";

export const calculateTotalAbsence = (numEtu?: string, signatureSheets?: SignatureSheet[]) => {
    if (!signatureSheets || signatureSheets?.length === 0 || !numEtu) return 0;
    let totalAbsence = 0;
    signatureSheets.forEach((sheet) => {
        const duration = (new Date(sheet.finishAt).getTime() - new Date(sheet.createdAt).getTime()) / (1000 * 60 * 60)
        for (const sign of sheet.signatures) {
            if (sign.studentWhoSign.numEtu === numEtu && sign.sign === Presence.ABS && sign.justification === Justification.NOT_JUSTIFIED) {
                totalAbsence += duration;
            }
        }
    })
    return totalAbsence;
}