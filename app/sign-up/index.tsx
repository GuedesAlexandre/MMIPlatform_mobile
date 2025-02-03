import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles/_styles";
import { Colors } from "@/constants/Colors";
import InputUI from "@/app/sign-up/components/inputUI";
import { useSignUp } from "@/app/store/signup.store";
import NavigateButton from "@/app/sign-up/components/navigationButton";

const SignUpScreen = () => {
  const { firstName, lastName, birthDate, numEtu, resetAllInputs } =
    useSignUp();

  const router = useRouter();

  const handlePress = () => {
    resetAllInputs();
    router.push("/");
  };

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View style={styles.titleBox}>
        <Text style={[styles.title, { color: Colors["primary-blue"] }]}>
          Créer votre compte{" "}
        </Text>
        <Text style={[styles.title, { color: Colors["highlight-yellow"] }]}>
          pour utiliser l'application
        </Text>
      </View>
      <View>
        <InputUI
          placeholder="Entrer votre prénom"
          icon="user"
          value={firstName}
          infoType="firstName"
        />
        <InputUI
          placeholder="Entrer votre nom"
          icon="user"
          value={lastName}
          infoType="lastName"
        />
        <InputUI
          placeholder="Numéro étudiant"
          icon="idcard"
          value={numEtu}
          infoType="numEtu"
        />
      </View>
      <NavigateButton label="Suivant" bgColor={Colors["primary-blue"]} />
      <View>
        <Pressable onPress={handlePress} style={styles.containerLogin}>
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

export default SignUpScreen;
