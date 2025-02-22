import React, {forwardRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {Colors} from "@/constants/Colors";
import {Note} from "@/app/models/userInformation.model";
import {Button} from "react-native-magnus";
import {drawerStyles} from "@/app/styles/_styles";

interface DrawerProps {
    grade: Note
}

const GradeDrawer = forwardRef<ActionSheetRef, DrawerProps>(({grade}, ref) => {

    const handlePressClose = () => {
        (ref as React.RefObject<ActionSheetRef>).current?.hide();
    }

    return (
        <ActionSheet
            ref={ref}
            containerStyle={drawerStyles.container}
            gestureEnabled={true}
            indicatorStyle={{backgroundColor: "#dedede"}}
        >
            <View style={drawerStyles.content}>
                <View>
                    <Text style={drawerStyles.title}>{grade.module.name}</Text>
                </View>
                <View style={{marginVertical: 20}}>
                    <View>
                        <Text style={drawerStyles.controleNameText}>{grade.name}</Text>
                    </View>
                    <View style={drawerStyles.containerInfo}>
                        <Text style={{fontSize: 18}}>Note :</Text>
                        <Text style={{fontSize: 18}}>{grade.note.toFixed(2)}</Text>
                    </View>
                    <View style={drawerStyles.containerInfo}>
                        <Text style={{fontSize: 18}}>Coefficient du contrôle :</Text>
                        <Text style={{fontSize: 18}}>{grade.coeff}</Text>
                    </View>
                    <View style={drawerStyles.containerInfo}>
                        <Text style={{fontSize: 18}}>Coefficient de la ressource :</Text>
                        <Text style={{fontSize: 18}}>{grade.module.coeff}</Text>
                    </View>
                    <View style={drawerStyles.containerInfo}>
                        <Text style={{fontSize: 18}}>Semestre :</Text>
                        <Text style={{fontSize: 18}}>{grade.module.semester}</Text>
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

export default GradeDrawer;