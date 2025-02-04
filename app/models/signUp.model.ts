export interface signUpStore {
  firstName: string;
  lastName: string;
  numEtu: string;
  mail: string;
  password: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setNumEtu: (numEtu: string) => void;
  setMail: (mail: string) => void;
  setPassword: (password: string) => void;
  resetAllInputs: () => void;
}
