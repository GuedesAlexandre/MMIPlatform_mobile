import { Button } from "react-native-magnus";
import { styles } from "@/app/sign-up/styles/_styles";
import { ButtonUI } from "@/app/sign-up/models/navigationButton.model";

const NavigateButton = ({ label, bgColor, onPressFunction }: ButtonUI) => {
  return (
    <Button
      style={styles.button}
      mt={30}
      bg={bgColor}
      onPress={onPressFunction}
    >
      {label}
    </Button>
  );
};

export default NavigateButton;
