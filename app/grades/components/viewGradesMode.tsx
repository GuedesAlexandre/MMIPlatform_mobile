import {Pressable, Text, View} from "react-native";
import {viewGradesModeStyle} from "@/app/grades/style/_styles";

const ViewGradesMode = (
    {
        selectedMode,
        handlePressMode,
    }: {
        selectedMode: string;
        handlePressMode: (mode: "recent" | "module") => void;
    }
) => {
    return (
        <View style={viewGradesModeStyle.selectModeContainer}>
            <Pressable
                style={[viewGradesModeStyle.textPressable, selectedMode === "recent" && viewGradesModeStyle.textSelected]}
                onPress={() => handlePressMode("recent")}
            >
                <Text style={viewGradesModeStyle.selectModeText}>Récent</Text>
            </Pressable>
            <Pressable
                style={[viewGradesModeStyle.textPressable, selectedMode === "module" && viewGradesModeStyle.textSelected]}
                onPress={() => handlePressMode("module")}
            >
                <Text style={viewGradesModeStyle.selectModeText}>Matière</Text>
            </Pressable>
        </View>
    )
}

export default ViewGradesMode;