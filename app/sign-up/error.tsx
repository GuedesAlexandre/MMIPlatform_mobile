import { Text, View } from "react-native";
import { CircleX } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { styles } from "./styles/_styles";
import NavigateButton from "../components/navigationButton";
import { useRouter } from "expo-router";

const ErrorScreen = () => {
  const router = useRouter(); 

  const handleBackToHome = () => {
    router.push("/");
  };
  const handleRetry = () => {
    router.push('/sign-up')
  };
  return (
    <View>
      <CircleX
        color={Colors["danger"]}
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
          n’a pas pu être créé
        </Text>
      </View>
      <Text style={styles.textSignUpCallback}>
        Une erreur s’est produite lors de la création de votre compte. Vérifiez
        les informations fournies. Si le problème persiste, contactez un
        administrateur.
      </Text>
      <View>
        <NavigateButton
          label="Réessayer"
          bgColor={Colors["primary-blue"]}
          onPressFunction={handleRetry}
          marginTop={15}
        />
      </View>
      <View>
        <NavigateButton
          label="Retour à l'accueil"
          bgColor={Colors["primary-blue"]}
          marginTop={20}
          onPressFunction={handleBackToHome}
        />
      </View>
    </View>
  );
};

export default ErrorScreen;
