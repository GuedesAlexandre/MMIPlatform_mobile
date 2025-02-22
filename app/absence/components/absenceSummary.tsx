import {Text, View} from "react-native";
import {Clock} from "lucide-react-native";
import {absenceSummaryStyle} from "@/app/absence/style/_styles";
import {Colors} from "@/constants/Colors";

const AbsenceSummary = (
    {
        hours
    }: {
        hours?: number;
    }
) => {
    return (
        <View style={absenceSummaryStyle.container}>
            <Clock color={Colors["danger"]} size={36}/>
            <View>
                <Text style={absenceSummaryStyle.principalText}>Total d'heures manquées</Text>
                <Text style={absenceSummaryStyle.subText}>(non justifiées)</Text>
            </View>
            <View>
                <Text style={absenceSummaryStyle.principalText}>{`${hours}h00`}</Text>
            </View>
        </View>
    )
}

export default AbsenceSummary;