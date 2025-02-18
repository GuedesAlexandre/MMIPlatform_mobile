export interface ButtonUI {
  label: string;
  bgColor: string;
  onPressFunction: () => void;
  marginTop: number;
  isLoading?: boolean;
}
