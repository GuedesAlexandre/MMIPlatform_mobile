import {Pressable, Text, View} from "react-native";
import {ChevronLeft, ChevronRight} from "lucide-react-native";
import {semesterChoiceStyles} from "@/app/styles/_styles";
import {Colors} from "@/constants/Colors";
import {useState} from "react";

const SemesterChoice = (
    {
        handlePressArrow,
        semesterSelected
    }: {
        handlePressArrow: (action: "prev" | "next") => void;
        semesterSelected: number;
    }
) => {

    return (
        <View style={semesterChoiceStyles.container}>
            <Pressable onPress={() => handlePressArrow("prev")}>
                <ChevronLeft color={Colors["primary-blue"]} size={36} strokeWidth={1.5}/>
            </Pressable>
            <Text style={semesterChoiceStyles.text}>Semestre {semesterSelected}</Text>
            <Pressable onPress={() => handlePressArrow("next")}>
                <ChevronRight color={Colors["primary-blue"]} size={36} strokeWidth={1.5}/>
            </Pressable>
        </View>
    )
}

export default SemesterChoice;