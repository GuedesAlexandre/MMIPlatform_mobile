import { View, TextInput } from "react-native";
import { styles } from "@/app/sign-up/styles/_styles";
import { Colors } from "@/constants/Colors";
import { InputUiInterface } from "@/app/sign-up/models/inputs.model";
import { UserRound, IdCard, Lock, Mail } from "lucide-react-native";
import { useSignUp } from "@/app/store/signup.store";

const InputUI = ({
  placeholder,
  icon,
  value,
  infoType,
  isPassword,
}: InputUiInterface) => {
  const { setFirstName, setLastName, setNumEtu, setMail, setPassword } =
    useSignUp();

  const handleChange = (text: string) => {
    switch (infoType) {
      case "firstName":
        setFirstName(text);
        break;
      case "lastName":
        setLastName(text);
        break;
      case "numEtu":
        setNumEtu(text);
        break;
      case "mail":
        setMail(text);
        break;
      case "password":
        setPassword(text);
        break;
      default:
        break;
    }
  };

  return (
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
          infoType === "firstName" || infoType === "lastName" || infoType === "password"
            ? "default"
            : infoType === "mail"
            ? "email-address"
            : "number-pad"
        }
        returnKeyType="done"
        style={styles.input}
        onChangeText={handleChange}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default InputUI;
