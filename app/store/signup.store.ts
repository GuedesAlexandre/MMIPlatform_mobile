import { create } from "zustand";
import { signUpStore } from "@/app/models/signUp.model";

export const useSignUp = create<signUpStore>((set) => ({
  firstName: "",
  lastName: "",
  birthDate: "",
  numEtu: "",
  mail: "",
  password: "",
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setNumEtu: (numEtu) => set({ numEtu }),
  setMail: (mail) => set({ mail }),
  setPassword: (password) => set({ password }),
  resetAllInputs: () =>
    set({
      firstName: "",
      lastName: "",
      numEtu: "",
      mail: "",
      password: "",
    }),
}));
