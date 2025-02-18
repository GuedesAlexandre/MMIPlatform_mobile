import {Pressable, Text, View} from "react-native";
import {gradeCardStyles} from "@/app/styles/_styles";

const GradeCard = (
    {
        grade,
        module,
        controlName,
        onPress,
    }: {
        grade: number
        module?: string
        controlName: string
        onPress?: () => void
    }
) => {
    return (
        <Pressable
            onPress={onPress}
            style={({pressed})=>[
                {
                    backgroundColor: pressed ? "#ebebeb" : "transparent",
                },
                gradeCardStyles.container
            ]}
        >
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
            <View style={{width: "23%"}}>
                <Text style={gradeCardStyles.gradeContainer}>{grade.toFixed(2)}</Text>
            </View>
        </Pressable>
    )
}

export default GradeCard;