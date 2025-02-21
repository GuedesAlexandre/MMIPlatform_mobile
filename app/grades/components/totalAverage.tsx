import {Text, View} from "react-native";
import {Module} from "@/app/models/userInformation.model";
import {useUserInformation} from "@/app/store/userInformation.store";
import {useEffect, useState} from "react";
import {globalAverage} from "@/app/grades/helper/average";
import {totalAverageStyle} from "@/app/grades/style/_styles";
import {useModuleStore} from "@/app/store/module.store";
import {Colors} from "@/constants/Colors";

const TotalAverage = ({semesterSelected}: { semesterSelected: string }) => {
    const [modulesBySemester, setModulesBySemester] = useState<Module[] | undefined>(undefined);
    const {userInformation} = useUserInformation();
    const {allModules, fetchModules} = useModuleStore();

    useEffect(() => {
        fetchModules();
        setModulesBySemester(allModules?.filter((module) => module.semester === semesterSelected));
    }, []);

    const globalStudentAverage = globalAverage(modulesBySemester, userInformation)

    return (
        <View style={totalAverageStyle.container}>
            <Text style={[totalAverageStyle.totalAverageText, {marginRight: 15}]}>Moyenne du semestre :</Text>
            <Text
                style={[totalAverageStyle.totalAverageText, globalStudentAverage <= 10 ? {color: Colors["danger"]} : {color: Colors["success"]}]}>{globalStudentAverage.toFixed(2)}</Text>
        </View>
    );
};

export default TotalAverage;