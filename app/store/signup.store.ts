import { create } from "zustand";
import { signUpStore } from "@/app/models/signUp.model";

export const useSignUp = create<signUpStore>((set) => ({
  firstName: "",
  lastName: "",
  birthDate: "",
  numEtu: "",
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setNumEtu: (numEtu) => set({ numEtu }),
  resetAllInputs: () =>
    set({
      firstName: "",
      lastName: "",
      numEtu: "",
    }),
}));
