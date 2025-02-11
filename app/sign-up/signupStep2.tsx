import { View, Text, Pressable } from "react-native";
import NavigationBall from "@/app/sign-up/components/ui/navigationBall";
import { styles } from "@/app/sign-up/styles/_styles";
import { Colors } from "@/constants/Colors";
import InputUI from "@/app/components/ui/inputUI";
import { useSignUp } from "@/app/store/signup.store";
import { useRouter } from "expo-router";
import { MoveLeft, Lock, Mail } from "lucide-react-native";
import NavigateButton from "@/app/components/ui/navigationButton";
// import { createUserAccout } from "@/app/sign-up/service/createUserAccount";
import {
  checkMail,
  checkPassword,
  checkConfirmPassword,
} from "@/app/sign-up/service/checkString";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { KeyboardType } from "@/app/models/inputUI.model";

const SignUpScreen2 = () => {
  const {
    mail,
    password,
    confirmPassword,
    firstName,
    lastName,
    numEtu,
    setPassword,
    setMail,
    setConfirmPassword,
    resetAllInputs,
    createUserStudent,
  } = useSignUp();
  const router = useRouter();

  const handleReturnBack = () => {
    setMail("");
    setPassword("");
    setConfirmPassword("");
    router.push("/sign-up");
  };

  const handlePressReset = () => {
    resetAllInputs();
    router.push("/");
  };

  const handleChangeMail = (text: string) => {
    setMail(text.toLowerCase());
  };

  const handleConfirm = async () => {
    const areFieldsValid = [mail, password].every(
      (field) => field.trim() !== ""
    );
    const isPasswordValid = checkPassword(password) === null ? true : false;
    const isMailValid = checkMail(mail) === null ? true : false;
    const isConfirmPasswordValid =
      checkConfirmPassword(password, confirmPassword) === null;
    if (
      areFieldsValid &&
      isMailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      try {
        await createUserStudent(
          firstName.trimEnd(),
          lastName.trimEnd(),
          numEtu,
          mail.trimEnd(),
          password.trimEnd()
        );
        resetAllInputs();
        router.push("/sign-up/success");
      } catch (err) {
        resetAllInputs();
        console.error(err);
        router.push("/sign-up/error");
      }
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }}
      enableOnAndroid={true}
      extraScrollHeight={50}
      keyboardShouldPersistTaps="handled"
    >
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
          Créer votre compte
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
          Icon={Mail}
          value={mail}
          onChangeText={handleChangeMail}
          keyboardType={KeyboardType.EmailAddress}
          onValidate={checkMail}
        />
        <InputUI
          placeholder="Mot de passe"
          Icon={Lock}
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          onValidate={checkPassword}
        />
        <InputUI
          placeholder="Confirmer votre mot de passe"
          Icon={Lock}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          isPassword={true}
          onValidate={checkConfirmPassword}
          referenceValue={password}
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
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen2;
