export interface SignUpStore {
  firstName: string;
  lastName: string;
  numEtu: string;
  mail: string;
  password: string;
  confirmPassword: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setNumEtu: (numEtu: string) => void;
  setMail: (mail: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  resetAllInputs: () => void;
  createUserStudent: (
    firstName: string,
    lastName: string,
    numEtu: string,
    mail: string,
    password: string
  ) => Promise<void>;
}
