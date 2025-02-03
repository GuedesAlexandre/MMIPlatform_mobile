import { Button } from "react-native-magnus";
import { styles } from "@/app/sign-up/styles/_styles";
import { ButtonUI } from "@/app/sign-up/models/navigationButton.model";

const NavigateButton = ({ label, bgColor }: ButtonUI) => {
  return (
    <Button style={styles.button} mt={30} bg={bgColor}>
      {label}
    </Button>
  );
};

export default NavigateButton;
