import {Text, View} from "react-native";
import {Note} from "@/app/models/userInformation.model";

const AccordionGrade = (
    {
        gradesModuleName,
        grades
    }: {
        gradesModuleName: string;
        grades: Note[];
    }
) => {
    return (
        <View>
            <Text>
                {gradesModuleName}
            </Text>
        </View>
    )
}

export default AccordionGrade;