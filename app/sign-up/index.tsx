import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "@/app/sign-up/styles/_styles";
import { Colors } from "@/constants/Colors";
import InputUI from "@/app/sign-up/components/inputUI";
import { useSignUp } from "@/app/store/signup.store";
import NavigateButton from "@/app/components/ui/navigationButton";
import NavigationBall from "@/app/sign-up/components/ui/navigationBall";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUpScreen = () => {
  const { firstName, lastName, numEtu, resetAllInputs } = useSignUp();

  const router = useRouter();

  const handleNextForm = () => {
    const areFieldsValid = [firstName, lastName, numEtu].every(
      (field) => field.trim() !== ""
    );

    if (areFieldsValid) {
      router.push("/sign-up/step2");
    }
  };

  const handlePress = () => {
    resetAllInputs();
    router.push("/");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }}
      enableOnAndroid={true}
      extraScrollHeight={50}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.titleBox}>
        <Text style={[styles.title, { color: Colors["primary-blue"] }]}>
          Créer votre compte
        </Text>
        <Text style={[styles.title, { color: Colors["highlight-yellow"] }]}>
          pour utiliser l'application
        </Text>
      </View>
      <View style={styles.navigationBallsContainer}>
        <NavigationBall
          filled={true}
          color={Colors["highlight-yellow"]}
          borderColor={Colors["primary-blue"]}
          size={12.5}
        />
        <NavigationBall
          filled={false}
          color={Colors["highlight-yellow"]}
          borderColor={Colors["primary-blue"]}
          size={12.5}
        />
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
      <View>
        <NavigateButton
          marginTop={30}
          label="Suivant"
          bgColor={Colors["primary-blue"]}
          onPressFunction={handleNextForm}
        />
      </View>
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
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
