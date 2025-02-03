import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles/_styles";
import { Colors } from "@/constants/Colors";
import InputUI from "@/app/sign-up/components/inputUI";
import { useSignUp } from "@/app/store/signup.store";

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
          placeholder="Date de naissance"
          icon="calendar"
          value={birthDate}
          infoType="birthDate"
        />
        <InputUI
          placeholder="Numéro étudiant"
          icon="idcard"
          value={numEtu}
          infoType="numEtu"
        />
      </View>
      <Link href={"/"}>
        <Text>Suivant</Text>
      </Link>
      <Pressable onPress={handlePress}>
        <Text>
          <Text>Déjà un compte ? </Text>
          <Text>Connectez-vous</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;
