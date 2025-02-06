import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "@/app/sign-up/styles/_styles";
import { Colors } from "@/constants/Colors";
import InputUI from "@/app/components/ui/inputUI";
import { useSignUp } from "@/app/store/signup.store";
import NavigateButton from "@/app/components/ui/navigationButton";
import NavigationBall from "@/app/sign-up/components/ui/navigationBall";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserRound, IdCard } from "lucide-react-native";
import { KeyboardType } from "@/app/models/inputUI.model";

const SignUpScreen = () => {
  const {
    firstName,
    lastName,
    numEtu,
    setFirstName,
    setLastName,
    setNumEtu,
    resetAllInputs,
  } = useSignUp();
  const router = useRouter();

  const handleFirstNameChange = (text: string) => {
    let cleanedText = text.charAt(0).toUpperCase() + text.slice(1);
    setFirstName(cleanedText);
  };

  const handleLastNameChange = (text: string) => {
    let cleanedText = text.charAt(0).toUpperCase() + text.slice(1);
    setLastName(cleanedText);
  };

  const handleNextForm = () => {
    const areFieldsValid = [firstName, lastName, numEtu].every(
      (field) => field.trim() !== ""
    );
    if (areFieldsValid) {
      router.push("/sign-up/signupStep2");
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
          value={firstName}
          onChangeText={handleFirstNameChange}
          Icon={UserRound}
        />
        <InputUI
          placeholder="Entrer votre nom"
          value={lastName}
          onChangeText={handleLastNameChange}
          Icon={UserRound}
        />
        <InputUI
          placeholder="Numéro d'étudiant"
          value={numEtu}
          onChangeText={setNumEtu}
          Icon={IdCard}
          keyboardType={KeyboardType.NumberPad}
          maxLength={6}
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
