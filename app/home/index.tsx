import {Pressable, ScrollView, Text, View} from "react-native";
import {useAuthStore} from "@/app/store/auth.store";
import {useRouter} from "expo-router";
import {useUserInformation} from "@/app/store/userInformation.store";
import {useEffect, useState} from "react";
import useSignatureSheets from "@/app/store/signatureSheet.store";
import {Note} from "@/app/models/userInformation.model";
import {getRecentGrades} from "@/app/home/helper/recentGrades";
import GradeCard from "@/app/components/ui/gradeCard";
import {SignatureSheet} from "@/app/models/signatureSheet.model";
import {recentAbsence} from "@/app/home/helper/recentAbsence";
import AbsenceCard from "@/app/components/ui/absenceCard";
import {SquareArrowOutUpRight} from "lucide-react-native";
import {homeStyles} from "@/app/home/styles/_styles";
import {Colors} from "@/constants/Colors";
import UserInfoBox from "@/app/home/components/userInfoBox";
import {viewGradesStyle} from "@/app/grades/style/_styles";

const HomeScreen = () => {
    const router = useRouter();
    const {user} = useAuthStore()
    const {userInformation, getUserInformation} = useUserInformation();
    const {signatureSheets, fetchSignatureSheets} = useSignatureSheets();
    const [gradesBySemester, setGradesBySemester] = useState<Note[] | undefined>([]);
    const [absences, setAbsences] = useState<SignatureSheet[] | undefined>([]);

    const maxVisibleCards = 5;

    useEffect(() => {
        if (user) {
            getUserInformation(user.user.numEtu);
            fetchSignatureSheets(user.user.promo, user.user.numEtu);
        }
    }, [user]);

    useEffect(() => {
        if (userInformation) {
            setGradesBySemester(getRecentGrades(maxVisibleCards, userInformation));
        }
    }, [userInformation]);

    useEffect(() => {
        if (signatureSheets) {
            setAbsences(recentAbsence(maxVisibleCards, user?.user.numEtu, signatureSheets));
        }
    }, [signatureSheets]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {
                user &&
                <UserInfoBox
                    firstName={user.user.firstName}
                    lastName={user.user.name}
                    promo={user.user.promo}
                    group={user.user.group}
                />
            }
            <View
                style={{flex: 1, marginTop: 25}}
            >
                <Pressable
                    onPress={() => router.push("/grades")}
                    style={homeStyles.buttonContainer}
                >
                    <Text style={homeStyles.buttonText}>Mes dernières notes</Text>
                    <SquareArrowOutUpRight color={Colors["text-color-black"]}/>
                </Pressable>
                {
                    gradesBySemester?.length === 0
                        ? <View style={viewGradesStyle.textAnyControlContainer}>
                            <Text style={viewGradesStyle.textAnyControl}>
                                Pas de contrôle pour l'instant.
                            </Text>
                        </View>
                        : gradesBySemester?.slice().reverse().map((grade, key) => {
                            return (
                                <GradeCard
                                    key={key}
                                    grade={grade}
                                />
                            )
                        })

                }
            </View>
            <View
                style={{flex: 1, marginVertical: 40}}
            >
                <Pressable
                    onPress={() => router.push("/absence")}
                    style={homeStyles.buttonContainer}
                >
                    <Text style={homeStyles.buttonText}>Mes dernières absences</Text>
                    <SquareArrowOutUpRight color={Colors["text-color-black"]}/>
                </Pressable>
                {
                    absences?.length === 0
                        ? <View style={viewGradesStyle.textAnyControlContainer}>
                            <Text style={viewGradesStyle.textAnyControl}>
                                Pas d'absences pour l'instant.
                            </Text>
                        </View>

                        : absences?.slice().reverse().map((sheet, key) => {
                            const userSignature = sheet.signatures
                                .find((signature) => signature.studentWhoSign.numEtu === user?.user.numEtu);
                            return userSignature && (
                                <AbsenceCard
                                    justification={userSignature.justification}
                                    createdAt={sheet.createdAt}
                                    finishedAt={sheet.finishAt}
                                    moduleName={sheet.moduleName}
                                    key={key}
                                />
                            )
                        })
                }
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
