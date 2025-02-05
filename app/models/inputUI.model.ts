import { LucideIcon } from "lucide-react-native";

export interface InputUIInterface {
  placeholder: string;
  value: string;
  isPassword?: boolean;
  keyboardType?: KeyboardType;
  maxLength?: number | undefined;
  onChangeText: (value: string) => void;
  Icon: LucideIcon;
  onValidate?: (value: string, referenceValue?: string) => string | null;
  referenceValue?: string;
}

export enum KeyboardType {
  Default = "default",
  NumberPad = "number-pad",
  DecimalPad = "decimal-pad",
  Numeric = "numeric",
  EmailAddress = "email-address",
  PhonePad = "phone-pad",
  Url = "url",
}
