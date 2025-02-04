export interface signUpStore {
  firstName: string;
  lastName: string;
  numEtu: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setNumEtu: (numEtu: string) => void;
  resetAllInputs: () => void;
}
