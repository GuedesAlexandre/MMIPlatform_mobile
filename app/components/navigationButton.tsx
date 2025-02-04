import { Button } from "react-native-magnus";
import { styles } from "@/app/sign-up/styles/_styles";
import { ButtonUI } from "@/app/sign-up/models/navigationButton.model";

const NavigateButton = ({ label, bgColor, onPressFunction, marginTop }: ButtonUI) => {
  return (
    <Button
      style={styles.button}
      mt={marginTop}
      bg={bgColor}
      onPress={onPressFunction}
      fontSize={20}
      rounded={10}
    >
      {label}
    </Button>
  );
};

export default NavigateButton;
