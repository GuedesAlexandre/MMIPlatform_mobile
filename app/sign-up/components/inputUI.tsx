import { View, TextInput, Text } from "react-native";
import { styles } from "@/app/sign-up/styles/_styles";
import { Colors } from "@/constants/Colors";
import { InputUiInterface } from "@/app/sign-up/models/inputs.model";
import { UserRound, IdCard, Lock, Mail } from "lucide-react-native";
import { useSignUp } from "@/app/store/signup.store";
import { useState } from "react";
import { checkPassword, checkMail } from "@/app/sign-up/service/checkString";

const InputUI = ({
  placeholder,
  icon,
  value,
  infoType,
  isPassword,
}: InputUiInterface) => {
  const { setFirstName, setLastName, setNumEtu, setMail, setPassword } =
    useSignUp();
  const [errorMessageMail, setErrorMessageMail] = useState<string>("");
  const [errorMessagePassword, setErrorMessagePassword] = useState<string>("");

  const handleCheckString = (text: string) => {
    if (infoType === "mail") {
      setErrorMessageMail(checkMail(text));
    } else if (infoType === "password") {
      setErrorMessagePassword(checkPassword(text));
    }
  };

  const handleChange = (text: string) => {
    let cleanedText = text;

    if (["firstName", "lastName", "mail", "password"].includes(infoType)) {
      cleanedText = text.trimStart();
    }

    if (["firstName", "lastName"].includes(infoType)) {
      cleanedText = cleanedText.charAt(0).toUpperCase() + cleanedText.slice(1);
    }

    switch (infoType) {
      case "firstName":
        setFirstName(cleanedText);
        break;
      case "lastName":
        setLastName(cleanedText);
        break;
      case "numEtu":
        setNumEtu(cleanedText);
        break;
      case "mail":
        setMail(cleanedText.toLowerCase());
        break;
      case "password":
        setPassword(cleanedText);
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        {icon === "user" ? (
          <UserRound
            color={Colors["text-color-black"]}
            size={18}
            strokeWidth={1}
            style={styles.inputIcon}
          />
        ) : icon === "lock" ? (
          <Lock
            color={Colors["text-color-black"]}
            strokeWidth={1}
            size={18}
            style={styles.inputIcon}
          />
        ) : icon === "letter" ? (
          <Mail
            color={Colors["text-color-black"]}
            strokeWidth={1}
            size={18}
            style={styles.inputIcon}
          />
        ) : (
          <IdCard
            color={Colors["text-color-black"]}
            strokeWidth={1}
            size={18}
            style={styles.inputIcon}
          />
        )}
        <TextInput
          placeholder={placeholder}
          value={value}
          placeholderTextColor={Colors["text-color-black"]}
          keyboardType={
            infoType === "firstName" ||
            infoType === "lastName" ||
            infoType === "password"
              ? "default"
              : infoType === "mail"
              ? "email-address"
              : "number-pad"
          }
          maxLength={infoType === "numEtu" ? 6 : undefined}
          returnKeyType="done"
          style={styles.input}
          onChangeText={handleChange}
          onBlur={(e) => handleCheckString(e.nativeEvent.text)}
          secureTextEntry={isPassword}
        />
      </View>
      {infoType === "mail"
        ? errorMessageMail !== "" && (
            <Text style={styles.errorInputMessage}>{errorMessageMail}</Text>
          )
        : errorMessagePassword !== "" && (
            <Text style={styles.errorInputMessage}>{errorMessagePassword}</Text>
          )}
    </View>
  );
};

export default InputUI;
