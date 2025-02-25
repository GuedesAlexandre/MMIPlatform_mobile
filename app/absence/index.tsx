import {Text, View} from "react-native";
import useSignatureSheets from "@/app/store/signatureSheet.store";
import {SignatureSheet} from "@/app/models/signatureSheet.model";
import {useEffect, useState} from "react";
import {useAuthStore} from "@/app/store/auth.store";
import {Presence} from "@/app/models/enum/presence.enum";
import {viewGradesStyle} from "@/app/grades/style/_styles";
import AbsenceSummary from "@/app/absence/components/absenceSummary";
import BackArrow from "@/app/components/ui/backArrow";
import {calculateTotalAbsence} from "@/app/absence/helper/totalAbsence";
import ViewAbsences from "@/app/absence/components/viewAbsences";

const AbsenceScreen = () => {
    const {signatureSheets} = useSignatureSheets();
    const {user} = useAuthStore()
    const [absences, setAbsences] = useState<SignatureSheet[] | undefined>(undefined);

    useEffect(() => {
        setAbsences(signatureSheets?.filter((sheet) =>
            sheet.signatures.some((student) =>
                student.studentWhoSign.numEtu === user?.user.numEtu &&
                student.sign === Presence.ABS
            )
        ));
    }, [signatureSheets]);

    return (
        <View>
            <BackArrow/>
            <AbsenceSummary hours={calculateTotalAbsence(user?.user.numEtu, absences)}/>
            {
                absences?.length !== 0
                    ? <ViewAbsences absencesSheets={absences} numEtu={user?.user.numEtu}/>
                    :
                    <View style={viewGradesStyle.textAnyControlContainer}>
                        <Text style={viewGradesStyle.textAnyControl}>
                            Aucune absence.
                        </Text>
                    </View>
            }
        </View>
    )
}

export default AbsenceScreen;