import {Text, View} from "react-native";
import {totalAverageStyle} from "@/app/grades/style/_styles";
import {Colors} from "@/constants/Colors";

const TotalAverage = ({globalAverage}: { globalAverage: number }) => {

    return (
        <View style={totalAverageStyle.container}>
            <Text style={[totalAverageStyle.totalAverageText, {marginRight: 15}]}>Moyenne du semestre :</Text>
            <Text
                style={[totalAverageStyle.totalAverageText, globalAverage <= 10 ? {color: Colors["danger"]} : {color: Colors["success"]}]}>{globalAverage.toFixed(2)}</Text>
        </View>
    );
};

export default TotalAverage;