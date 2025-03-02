import {View} from "react-native";
import {SignatureSheet} from "@/app/models/signatureSheet.model";
import AbsenceCard from "@/app/components/ui/absenceCard";

const ViewAbsences = (
    {
        absencesSheets,
        numEtu
    }: {
        absencesSheets?: SignatureSheet[]
        numEtu?: string
    }
) => {
    return (
        <View style={{marginTop: 15}}>
            {
                absencesSheets?.map((sheet, key) => {
                    const userSignature = sheet.signatures
                        .find((signature) => signature.studentWhoSign.numEtu === numEtu);
                    return userSignature && (
                        <AbsenceCard
                            justification={userSignature.justification}
                            createdAt={sheet.createdAt}
                            finishedAt={sheet.finishAt}
                            moduleName={sheet.moduleName}
                            key={key}
                        />
                    )
                })
            }
        </View>
    )
}

export default ViewAbsences;