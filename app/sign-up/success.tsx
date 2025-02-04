import { Colors } from "@/constants/Colors";
import { CircleCheck } from "lucide-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles/_styles";
import NavigateButton from "../components/navigationButton";
import { useRouter } from "expo-router";

const SuccessScreen = () => {
  const router = useRouter();

  const handleNavigateAuth = () => {
    router.push("/");
  };

  return (
    <View>
      <CircleCheck
        color={Colors["success"]}
        size={172}
        style={styles.iconSignUpCallback}
      />
      <View style={styles.titleBox}>
        <Text
          style={[
            styles.titleSignUpCallback,
            { color: Colors["primary-blue"], textAlign: "center" },
          ]}
        >
          Votre compte{" "}
        </Text>
        <Text
          style={[
            styles.titleSignUpCallback,
            { color: Colors["highlight-yellow"], textAlign: "center" },
          ]}
        >
          a été créé avec succès
        </Text>
      </View>
      <Text style={styles.textSignUpCallback}>
        Vous pouvez maintenant consulter vos notes, vos absences et signaler
        votre présence en cours en scannant un QR code dédié.
      </Text>
      <View>
        <NavigateButton
          label="Connectez-vous"
          bgColor={Colors["primary-blue"]}
          onPressFunction={handleNavigateAuth}
          marginTop={15}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;
