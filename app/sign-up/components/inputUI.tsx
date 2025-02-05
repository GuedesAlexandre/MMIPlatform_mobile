import { View, TextInput, Text, Pressable } from "react-native";
import { styles } from "@/app/sign-up/styles/_styles";
import { Colors } from "@/constants/Colors";
import { InputUiInterface } from "@/app/sign-up/models/ui/inputs.model";
import {
  UserRound,
  IdCard,
  Lock,
  Mail,
  Eye,
  EyeOff,
} from "lucide-react-native";
import { useSignUp } from "@/app/store/signup.store";
import { useState } from "react";
import {
  checkPassword,
  checkMail,
  checkConfirmPassword,
} from "@/app/sign-up/service/checkString";

const InputUI = ({
  placeholder,
  icon,
  value,
  infoType,
  isPassword = false,
}: InputUiInterface) => {
  const {
    setFirstName,
    setLastName,
    setNumEtu,
    setMail,
    setPassword,
    setConfirmPassword,
    password,
  } = useSignUp();
  const [errorMessageMail, setErrorMessageMail] = useState<string | null>(null);
  const [errorMessagePassword, setErrorMessagePassword] = useState<
    string | null
  >(null);
  const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] =
    useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckString = (text: string) => {
    if (infoType === "mail") {
      setErrorMessageMail(checkMail(text));
    } else if (infoType === "password") {
      setErrorMessagePassword(checkPassword(text));
    } else if (infoType === "confirmPassword") {
      setErrorMessageConfirmPassword(checkConfirmPassword(password, text));
    }
  };

  const handleChange = (text: string) => {
    let cleanedText = text;

    if (
      ["firstName", "lastName", "mail", "password", "confirmPassword"].includes(
        infoType
      )
    ) {
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
      case "confirmPassword":
        setConfirmPassword(cleanedText);
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
            infoType === "mail"
              ? "email-address"
              : infoType === "numEtu"
              ? "number-pad"
              : "default"
          }
          autoComplete={infoType === "mail" ? "email" : undefined}
          maxLength={infoType === "numEtu" ? 6 : undefined}
          returnKeyType="done"
          style={styles.input}
          onChangeText={handleChange}
          onBlur={(e) => handleCheckString(e.nativeEvent.text)}
          secureTextEntry={isPassword && !showPassword}
        />
        {isPassword && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff
                color={Colors["text-color-black"]}
                size={18}
                strokeWidth={1}
              />
            ) : (
              <Eye
                color={Colors["text-color-black"]}
                size={18}
                strokeWidth={1}
              />
            )}
          </Pressable>
        )}
      </View>
      {infoType === "mail"
        ? errorMessageMail !== null && (
            <Text style={styles.errorInputMessage}>{errorMessageMail}</Text>
          )
        : infoType === "password"
        ? errorMessagePassword !== null && (
            <Text style={styles.errorInputMessage}>{errorMessagePassword}</Text>
          )
        : errorMessageConfirmPassword !== null && (
            <Text style={styles.errorInputMessage}>
              {errorMessageConfirmPassword}
            </Text>
          )}
    </View>
  );
};

export default InputUI;
