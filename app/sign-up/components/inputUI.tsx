import { View, TextInput } from "react-native";
import { styles } from "@/app/sign-up/styles/_styles";
import { Colors } from "@/constants/Colors";
import { InputUiInterface } from "@/app/sign-up/models/inputs.model";
import { UserRound, IdCard } from "lucide-react-native";
import { useSignUp } from "@/app/store/signup.store";

const InputUI = ({ placeholder, icon, value, infoType }: InputUiInterface) => {
  const { setFirstName, setLastName, setBirthDate, setNumEtu } = useSignUp();

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
          infoType === "firstName" || infoType === "lastName"
            ? "default"
            : "number-pad"
        }
        returnKeyType="done"
        style={styles.input}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default InputUI;
