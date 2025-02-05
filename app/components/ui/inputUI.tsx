import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { InputUIInterface, KeyboardType } from "@/app/models/inputUI.model";
import { Eye, EyeOff } from "lucide-react-native";

const InputUI = ({
  placeholder,
  value,
  isPassword = false,
  keyboardType = KeyboardType.Default,
  maxLength = undefined,
  onChangeText,
  Icon,
  onValidate,
  referenceValue,
}: InputUIInterface) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChangeText = (text: string) => {
    onChangeText(text.trimStart());
  };

  const handleBlur = () => {
    if (onValidate) {
      setErrorMessage(onValidate(value, referenceValue ?? ""));
    }
  };

  return (
    <View>
      <View style={style.inputContainer}>
        <Icon
          color={Colors["text-color-black"]}
          size={18}
          strokeWidth={1}
          style={style.inputIcon}
        />
        <TextInput
          placeholder={placeholder}
          value={value}
          placeholderTextColor={Colors["text-color-black"]}
          keyboardType={keyboardType}
          maxLength={maxLength}
          returnKeyType="done"
          style={style.input}
          onChangeText={handleChangeText}
          secureTextEntry={isPassword && !showPassword}
          onBlur={handleBlur}
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
      {errorMessage && (
        <Text style={style.errorInputMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default InputUI;

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors["primary-blue"],
    borderRadius: 7,
    paddingHorizontal: 10,
    height: 50,
    marginTop: 20,
  },
  input: {
    flex: 1,
  },
  inputIcon: {
    marginRight: 8,
  },
  errorInputMessage: {
    color: Colors["danger"],
    marginTop: 5,
    fontSize: 14,
  },
});
