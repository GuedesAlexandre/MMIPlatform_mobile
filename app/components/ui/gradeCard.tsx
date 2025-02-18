import {Pressable, Text, View} from "react-native";
import {gradeCardStyles} from "@/app/styles/_styles";
import {useRef} from "react";
import {ActionSheetRef} from "react-native-actions-sheet";
import Drawer from "@/app/components/ui/drawer";
import {Note} from "@/app/models/userInformation.model";

const GradeCard = (
    {
        grade,
    }: {
        grade: Note
    }
) => {

    const drawerRef = useRef<ActionSheetRef>(null);

    const openDrawer = () => {
        drawerRef.current?.show();
    };

    return (
        <Pressable
            onPress={openDrawer}
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
                        {grade.module.name}
                    </Text>
                }
                <Text
                    style={gradeCardStyles.controlName}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {grade.name}
                </Text>
            </View>
            <View style={{width: "23%"}}>
                <Text style={gradeCardStyles.gradeContainer}>{grade.note.toFixed(2)}</Text>
            </View>
            <Drawer ref={drawerRef} grade={grade}/>
        </Pressable>
    )
}

export default GradeCard;