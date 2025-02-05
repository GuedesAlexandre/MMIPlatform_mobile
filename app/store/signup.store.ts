import { create } from "zustand";
import { SignUpStore } from "@/app/models/signUp.model";

export const useSignUp = create<SignUpStore>((set) => ({
  firstName: "",
  lastName: "",
  birthDate: "",
  numEtu: "",
  mail: "",
  password: "",
  confirmPassword: "",
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
  setNumEtu: (numEtu) => set({ numEtu }),
  setMail: (mail) => set({ mail }),
  setPassword: (password) => set({ password }),
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  resetAllInputs: () =>
    set({
      firstName: "",
      lastName: "",
      numEtu: "",
      mail: "",
      password: "",
      confirmPassword: "",
    }),
}));
