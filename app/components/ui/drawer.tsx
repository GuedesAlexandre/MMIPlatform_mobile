import React, {forwardRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import {Colors} from "@/constants/Colors";
import {Note} from "@/app/models/userInformation.model";
import {Button} from "react-native-magnus";

interface DrawerProps {
    grade: Note
}

const Drawer = forwardRef<ActionSheetRef, DrawerProps>(({grade}, ref) => {

    const handlePressClose = () => {
        (ref as React.RefObject<ActionSheetRef>).current?.hide();
    }

    return (
        <ActionSheet
            ref={ref}
            containerStyle={styles.container}
            gestureEnabled={true}
            indicatorStyle={{backgroundColor: "#dedede"}}
        >
            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>{grade.module.name}</Text>
                </View>
                <View style={{marginVertical: 20}}>
                    <View>
                        <Text style={styles.controleNameText}>{grade.name}</Text>
                    </View>
                    <View style={styles.containerInfo}>
                        <Text style={{fontSize: 18}}>Note :</Text>
                        <Text style={{fontSize: 18}}>{grade.note.toFixed(2)}</Text>
                    </View>
                    <View style={styles.containerInfo}>
                        <Text style={{fontSize: 18}}>Coefficient du contrôle :</Text>
                        <Text style={{fontSize: 18}}>{grade.coeff}</Text>
                    </View>
                    <View style={styles.containerInfo}>
                        <Text style={{fontSize: 18}}>Coefficient de la ressource :</Text>
                        <Text style={{fontSize: 18}}>{grade.module.coeff}</Text>
                    </View>
                    <View style={styles.containerInfo}>
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

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors["background-color"],
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingTop: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    content: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors["text-color-black"],
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        color: Colors["text-color-black"],
        lineHeight: 22,
        marginBottom: 20,
    },
    icon: {
        position: 'absolute',
        right: 0,
    },
    containerInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginHorizontal: "auto",
        marginTop: 10,
    },
    resourceNameText: {
        fontSize: 18,
        fontWeight: 'medium',
        marginTop: 20,
    },
    controleNameText: {
        fontSize: 18,
        marginTop: 7.5,
    }
});

export default Drawer;