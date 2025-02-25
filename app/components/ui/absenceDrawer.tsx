import React, {forwardRef} from 'react';
import {Text, View} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {Colors} from "@/constants/Colors";
import {Button} from "react-native-magnus";
import {Justification} from "@/app/models/enum/justification.enum";
import {formatFullDate, formatTime} from "@/app/absence/helper/convertDate";
import {drawerStyles} from "@/app/styles/_styles";

interface DrawerProps {
    justification: Justification,
    createdAt: Date | string,
    finishedAt: Date | string,
    moduleName: string,
}

const AbsenceDrawer =
    forwardRef<ActionSheetRef, DrawerProps>(({justification, createdAt, finishedAt, moduleName,}, ref) => {

        const handlePressClose = () => {
            (ref as React.RefObject<ActionSheetRef>).current?.hide();
        }

        return (
            <ActionSheet
                ref={ref}
                containerStyle={drawerStyles.container}
                gestureEnabled={true}
                indicatorStyle={{backgroundColor: Colors["drawerIndicator"]}}
            >
                <View style={drawerStyles.content}>
                    <View>
                        <Text style={drawerStyles.title}>{moduleName}</Text>
                    </View>
                    <View style={{marginVertical: 20}}>
                        <View style={drawerStyles.containerInfo}>
                            <Text style={{fontSize: 18}}>Date de l'absence : </Text>
                            <Text style={{fontSize: 18}}>{formatFullDate(createdAt)}</Text>
                        </View>
                        <View style={drawerStyles.containerInfo}>
                            <Text style={{fontSize: 18}}>Status</Text>
                            <Text style={{fontSize: 18}}>
                                {
                                    justification === Justification.NOT_JUSTIFIED
                                        ? "Non justifiée"
                                        : "Justifiée"
                                }
                            </Text>
                        </View>
                        <View style={drawerStyles.containerInfo}>
                            <Text style={{fontSize: 18}}>Début du cours : </Text>
                            <Text style={{fontSize: 18}}>{formatTime(createdAt)}</Text>
                        </View>
                        <View style={drawerStyles.containerInfo}>
                            <Text style={{fontSize: 18}}>Fin du cours : </Text>
                            <Text style={{fontSize: 18}}>{formatTime(finishedAt)}</Text>
                        </View>
                    </View>
                    <Button
                        onPress={handlePressClose}
                        rounded={"lg"}
                        bg={Colors["primary-blue"]}
                        px={20}
                        fontSize={16}
                        alignSelf={"center"}
                    >
                        Fermer
                    </Button>
                </View>
            </ActionSheet>
        )
    });

export default AbsenceDrawer;