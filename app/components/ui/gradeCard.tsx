import {Text, View} from "react-native";
import {gradeCardStyles} from "@/app/styles/_styles";

const GradeCard = (
    {
        grade,
        module,
        controlName,
        coeff
    }: {
        grade: number
        module?: string
        controlName: string
        coeff: number
    }
) => {
    return (
        <View style={gradeCardStyles.container}>
            <View style={gradeCardStyles.namesGrade}>
                {
                    module &&
                    <Text
                        style={gradeCardStyles.module}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {module}
                    </Text>
                }
                <Text
                    style={gradeCardStyles.controlName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {controlName}
                </Text>
            </View>
            <View style={{width: "22%"}}>
                <Text style={gradeCardStyles.gradeContainer}>{grade.toFixed(2)}</Text>
            </View>
        </View>
    )
}

export default GradeCard;