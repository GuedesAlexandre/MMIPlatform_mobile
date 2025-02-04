import { Pressable, Text, View } from "react-native";
import NavigationBall from "./components/navigationBall";
import { styles } from "./styles/_styles";
import { Colors } from "@/constants/Colors";
import InputUI from "./components/inputUI";
import { useSignUp } from "../store/signup.store";
import { useRouter } from "expo-router";
import { MoveLeft } from "lucide-react-native";
import NavigateButton from "../components/navigationButton";
import { createUserAccout } from "./service/createUserAccount";

const SignUpScreen2 = () => {
  const { mail, password, firstName, lastName, numEtu, resetAllInputs } =
    useSignUp();
  const router = useRouter();

  const handleReturnBack = () => {
    router.push("/sign-up");
  };

  const handlePressReset = () => {
    resetAllInputs();
    router.push("/");
  };

  const handleConfirm = async () => {
    const areFieldsValid = [mail, password].every(
      (field) => field.trim() !== ""
    );
    if (areFieldsValid) {
      try {
        await createUserAccout(firstName, lastName, numEtu, mail, password);
        resetAllInputs();
        router.push("/sign-up/success");
      } catch (err) {
        resetAllInputs();
        router.push("/sign-up/error");
      }
    }
  };

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View>
        <MoveLeft
          strokeWidth={2}
          size={32}
          color={Colors["primary-blue"]}
          onPress={handleReturnBack}
        />
      </View>
      <View style={styles.titleBox}>
        <Text style={[styles.title, { color: Colors["primary-blue"] }]}>
          Créer votre compte{" "}
        </Text>
        <Text style={[styles.title, { color: Colors["highlight-yellow"] }]}>
          pour utiliser l'application
        </Text>
      </View>
      <View style={styles.navigationBallsContainer}>
        <NavigationBall
          filled={false}
          color={Colors["highlight-yellow"]}
          borderColor={Colors["primary-blue"]}
          size={12.5}
        />
        <NavigationBall
          filled={true}
          color={Colors["highlight-yellow"]}
          borderColor={Colors["primary-blue"]}
          size={12.5}
        />
      </View>
      <View>
        <InputUI
          placeholder="Entrer votre adress mail"
          icon="letter"
          value={mail}
          infoType="mail"
          isPassword={false}
        />
        <InputUI
          placeholder="Mot de passe"
          icon="lock"
          value={password}
          infoType="password"
          isPassword={true}
        />
      </View>
      <View>
        <NavigateButton
          marginTop={30}
          label="Confirmer"
          bgColor={Colors["primary-blue"]}
          onPressFunction={handleConfirm}
        />
      </View>
      <View>
        <Pressable onPress={handlePressReset} style={styles.containerLogin}>
          <Text style={styles.textLogin}>
            <Text>Déjà un compte ? </Text>
            <Text style={{ textDecorationLine: "underline" }}>
              Connectez-vous
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpScreen2;
