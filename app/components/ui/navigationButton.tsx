import { Button } from "react-native-magnus";
import { styles } from "@/app/sign-up/styles/_styles";
import { ButtonUI } from "@/app/sign-up/models/ui/navigationButton.model";
import { ActivityIndicator } from "react-native";

const NavigateButton = ({
  label,
  bgColor,
  onPressFunction,
  marginTop,
  isLoading: isLoad = false,
}: ButtonUI) => {
  return (
    <Button
      style={styles.button}
      mt={marginTop}
      bg={isLoad ? "rgba(0, 0, 0, 0.25)" : bgColor}
      onPress={onPressFunction}
      fontSize={15}
      rounded={10}
    >
      {isLoad ? <ActivityIndicator size="small" color="#fff" /> : label}
    </Button>
  );
};

export default NavigateButton;
