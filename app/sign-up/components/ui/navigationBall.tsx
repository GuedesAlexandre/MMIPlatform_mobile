import { View } from "react-native";

interface Ball {
  filled: boolean;
  color: string;
  borderColor: string;
  size: number;
}

const NavigationBall = ({ filled, color, borderColor, size }: Ball) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: filled ? color : "transparent",
        borderWidth: 2,
        borderColor: borderColor,
        margin: 5,
      }}
    />
  );
};

export default NavigationBall;
