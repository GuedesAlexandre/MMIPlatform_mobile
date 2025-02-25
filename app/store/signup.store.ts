import { create } from "zustand";
import { SignUpStore } from "@/app/models/signUp.model";
import axios from "axios";
import {PermissionsEnum} from "@/app/models/enum/permissions.enum";

export const useSignUp = create<SignUpStore>((set) => ({
    firstName: "",
    lastName: "",
    birthDate: "",
    numEtu: "",
    mail: "",
    password: "",
    confirmPassword: "",
    setFirstName: (firstName) => set({firstName}),
    setLastName: (lastName) => set({lastName}),
    setNumEtu: (numEtu) => set({numEtu}),
    setMail: (mail) => set({mail}),
    setPassword: (password) => set({password}),
    setConfirmPassword: (confirmPassword) => set({confirmPassword}),
    resetAllInputs: () =>
        set({
            firstName: "",
            lastName: "",
            numEtu: "",
            mail: "",
            password: "",
            confirmPassword: ""
        }),
    createUserStudent: async (
        firstName: string,
        lastName: string,
        numEtu: string,
        mail: string,
        password: string
    ) => {
        await axios.post(
            `${process.env.EXPO_PUBLIC_API_URL}/auth/student`,
            {
                numEtu: numEtu,
                email: mail.toLowerCase(),
                password: password,
                lastName: lastName.toUpperCase(),
                firstName: firstName.toUpperCase(),
                access: PermissionsEnum.STUDENT,
            });
    },
}));
