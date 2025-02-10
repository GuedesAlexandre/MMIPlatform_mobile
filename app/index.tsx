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

export default function HomeScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handlePress = () => {
    router.push("/sign-up");
  };

  const handlePressAuth = () => {
    if (!handleNullCheck(password) && !handleNullCheck(email)) {
      router.push("/");
    }
  };

  const handleNullCheck = (text: string) => {
    return text === null ? "Veuillez indiquez ce champs" : null;
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
            styleAuth.titleAuth,
          ]}
        >
          Connectez-
          <Text style={[styles.title, { color: Colors["highlight-yellow"] }]}>
            vous
          </Text>
        </Text>
      </View>

      <View style={{ marginVertical: 40 }}>
        <InputUI
          placeholder="Entrez votre email"
          value={email}
          onChangeText={setEmail}
          Icon={UserRound}
          keyboardType={KeyboardType.EmailAddress}
          onValidate={handleNullCheck}
        />
        <InputUI
          placeholder="Mot de passe"
          Icon={Lock}
          value={password}
          onChangeText={setPassword}
          isPassword={true}
          onValidate={handleNullCheck}
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
