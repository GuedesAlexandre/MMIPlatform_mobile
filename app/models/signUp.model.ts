export interface signUpStore {
  firstName: string;
  lastName: string;
  birthDate: string;
  numEtu: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setBirthDate: (birthDate: string) => void;
  setNumEtu: (numEtu: string) => void;
}
