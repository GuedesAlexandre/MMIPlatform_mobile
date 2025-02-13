import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "@/app/sign-up/styles/_styles";
import { styleAuth } from "./styles/_styles";
import { Colors } from "@/constants/Colors";
import InputUI from "@/app/components/ui/inputUI";
import { KeyboardType } from "@/app/models/inputUI.model";
import { UserRound, Lock } from "lucide-react-native";
import { useState } from "react";
import NavigateButton from "@/app/components/ui/navigationButton";
import { checkNull } from "./sign-up/service/checkString";
import { useAuthStore } from "./store/auth.store";

export default function HomeScreen() {
  const { fetchAuthToken } = useAuthStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handlePress = () => {
    router.push("/sign-up");
  };

  const handlePressAuth = () => {
    if (checkNull(password) === null && checkNull(email) === null) {
      fetchAuthToken(email, password).then((response) => {
        if (response && "error" in response) {
          setError(true);
          setErrorMessage(response.error);
        } else {
          setError(false);
          setErrorMessage(null);
          router.push("/home");
        }
      });
    }
  };

  const handleChangeEmail = (text: string) => {
    setEmail(text.toLowerCase());
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }}
      enableOnAndroid={true}
      extraScrollHeight={50}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.titleBox}>
        <Text
          style={[
            styles.title,
            { color: Colors["primary-blue"] },
            styleAuth.textCenter,
          ]}
        >
          Connectez-
          <Text style={[styles.title, { color: Colors["highlight-yellow"] }]}>
            vous
          </Text>
        </Text>
      </View>

      <View style={{ marginVertical: 40 }}>
        {error && (
          <Text style={[styles.errorMessage, styleAuth.textCenter]}>
            {errorMessage}
          </Text>
        )}
        <InputUI
          placeholder="Entrez votre email"
          value={email}
          onChangeText={handleChangeEmail}
          Icon={UserRound}
          keyboardType={KeyboardType.EmailAddress}
          onValidate={checkNull}
        />
        <InputUI
          placeholder="Mot de passe"
          Icon={Lock}
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          onValidate={checkNull}
        />
      </View>
      <View>
        <NavigateButton
          marginTop={30}
          label="Connexion"
          bgColor={Colors["primary-blue"]}
          onPressFunction={handlePressAuth}
        />
      </View>
      <View>
        <Pressable onPress={handlePress} style={styles.containerLogin}>
          <Text style={styles.textLogin}>
            <Text>Vous n’avez pas de compte ? </Text>
            <Text style={{ textDecorationLine: "underline" }}>
              Inscrivez-vous
            </Text>
          </Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
}
