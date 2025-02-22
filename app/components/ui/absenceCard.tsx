import {Pressable, Text, View} from "react-native";
import {Justification} from "@/app/models/enum/justification.enum";
import {formatDate, formatTime} from "@/app/absence/helper/convertDate";
import {absenceCardStyles} from "@/app/styles/_styles";
import {UserRoundCheck, UserRoundX} from "lucide-react-native";
import {Colors} from "@/constants/Colors";
import {useRef} from "react";
import {ActionSheetRef} from "react-native-actions-sheet";
import AbsenceDrawer from "@/app/components/ui/absenceDrawer";

const AbsenceCard = (
    {
        justification,
        createdAt,
        finishedAt,
        moduleName,
    }: {
        justification: Justification,
        createdAt: Date | string,
        finishedAt: Date | string,
        moduleName: string,
    }
) => {
    const drawerRef = useRef<ActionSheetRef>(null);

    const openDrawer = () => {
        drawerRef.current?.show();
    };

    return (
        <Pressable
            onPress={openDrawer}
            style={({pressed}) => [
                {
                    backgroundColor: pressed ? "#ebebeb" : "transparent",
                },
                absenceCardStyles.container
            ]}
        >
            {
                justification === Justification.NOT_JUSTIFIED
                    ? <UserRoundX size={36} color={Colors["danger"]} strokeWidth={1.5}/>
                    : <UserRoundCheck size={36} color={Colors["success"]} strokeWidth={1.5}/>
            }

            <View style={absenceCardStyles.textContainer}>

                <View style={absenceCardStyles.subContainer}>
                    {
                        justification === Justification.NOT_JUSTIFIED
                            ? <Text style={absenceCardStyles.headText}>Absence non-justifiée</Text>
                            : <Text style={absenceCardStyles.headText}>Absence justifiée</Text>
                    }
                    <Text style={[absenceCardStyles.headText, {marginLeft: 10}]}>{formatDate(createdAt)}</Text>
                </View>
                <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={absenceCardStyles.bottomText}
                >
                    {`${formatTime(createdAt)}-${formatTime(finishedAt)} - ${moduleName}`}
                </Text>
            </View>
            <AbsenceDrawer
                ref={drawerRef}
                justification={justification}
                finishedAt={finishedAt}
                createdAt={createdAt}
                moduleName={moduleName}/>
        </Pressable>
    )
}

export default AbsenceCard;