import {SignatureSheet} from "@/app/models/signatureSheet.model";
import {Presence} from "@/app/models/enum/presence.enum";

export const recentAbsence = (maxVisibleCards: number, numEtu?: string, signatureSheets?: SignatureSheet[]) => {
    if (!signatureSheets || !numEtu) return [];

    return signatureSheets?.filter((sheet) =>
        sheet.signatures.some((student) =>
            student.studentWhoSign.numEtu === numEtu &&
            student.sign === Presence.ABS
        )
    ).slice(0, maxVisibleCards);
}