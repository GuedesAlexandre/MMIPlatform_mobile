import {Pressable, Text, View} from "react-native";
import {Note} from "@/app/models/userInformation.model";
import GradeCard from "@/app/components/ui/gradeCard";
import {useState} from "react";
import {accordionStyles} from "@/app/grades/style/_styles";
import {ChevronDown, ChevronRight} from "lucide-react-native";
import {average} from "@/app/grades/helper/average";
import {Colors} from "@/constants/Colors";

const AccordionGrade = (
    {
        gradesModuleName,
        grades
    }: {
        gradesModuleName: string;
        grades: Note[];
    }
) => {
    const [viewAccordionGrade, setViewAccordionGrade] = useState(false);

    const handlePressAccordionGrade = () => {
        setViewAccordionGrade(!viewAccordionGrade);
    }

    const averageModule = average(grades)

    return (
        <View>
            <Pressable
                onPress={handlePressAccordionGrade}
                style={accordionStyles.headerContainer}
            >
                <View style={accordionStyles.headerTitleContainer}>
                    <Text
                        style={accordionStyles.headerText}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {gradesModuleName}
                    </Text>
                </View>
                <View style={accordionStyles.headerAverageIconContainer}>
                    <Text
                        style={[accordionStyles.headerText,
                            averageModule <= 10 ? {color: Colors["danger"]} : {color: Colors["success"]}]}
                    >
                        {averageModule.toFixed(2)}
                    </Text>
                    {
                        viewAccordionGrade
                            ? <ChevronDown color={Colors["text-color-black"]} strokeWidth={1}/>
                            : <ChevronRight color={Colors["text-color-black"]} strokeWidth={1}/>
                    }
                </View>
            </Pressable>
            {
                viewAccordionGrade && (
                    <View style={{marginVertical: 10}}>
                        {grades.map((grade, key) => (
                            <GradeCard key={key} grade={grade} viewOnlyControlName={true}/>
                        ))}
                    </View>
                )
            }
        </View>
    )
}

export default AccordionGrade;