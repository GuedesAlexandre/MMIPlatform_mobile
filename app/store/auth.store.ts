import axios, {AxiosError} from "axios";
import {create} from "zustand";
import JWT from "expo-jwt";
import * as SecureStore from 'expo-secure-store';
import {PermissionsEnum} from "@/app/models/enum/permissions.enum";

export interface UserSessionJWT {
    user: UserJWTtoModel;
    sub: string;
    iat: number;
    exp: number;
    expirationTime?: number;
}

export interface UserJWTtoModel {
    firstName: string;
    name: string;
    numEtu: string
    email: string;
    promo: string;
    group: string;
    access: PermissionsEnum;
}

interface storeUsers {
    user: UserSessionJWT | undefined;
    fetchAuthToken: (
        email: string,
        password: string
    ) => Promise<UserSessionJWT | { error: string } | undefined>;
    removeUserSession: () => void;
    checkSessionExpiration: () => void;
    loadUserSession: () => void;
}

export const useAuthStore = create<storeUsers>((set) => ({
    user: undefined,
    fetchAuthToken: async (email, password) => {
        try {
            if (!process.env.EXPO_PUBLIC_API_KEY) return;
            const response = await axios.post(
                `${process.env.EXPO_PUBLIC_API_URL}/auth/student/users/me`,
                {
                    email: email.toLowerCase(),
                    password: password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "*",
                    },
                }
            );
            const token = response.data;
            const dataUser = JWT.decode(
                token,
                process.env.EXPO_PUBLIC_API_KEY as string
            ) as UserSessionJWT;
            set({user: dataUser});
            await SecureStore.setItemAsync("bearer", token);
            await SecureStore.setItemAsync("user", JSON.stringify(dataUser));
            return dataUser;
        } catch (err: unknown) {
            const error = err as AxiosError;
            if (error.response) {
                if (error.response.status === 400) {
                    return {
                        error: "Votre mot de passe ou votre adresse mail est invalide.",
                    };
                }
            }
            return {error: "Une erreur interne est survenue."};
        }
    },
    removeUserSession: async () => {
        set({user: undefined});
        await SecureStore.deleteItemAsync("bearer");
        await SecureStore.deleteItemAsync("user");
    },
    checkSessionExpiration: async () => {
        set((state) => {
            if (state.user?.exp) {
                const isExpired = Date.now() > state.user.exp * 1000;
                if (isExpired) {
                    SecureStore.deleteItemAsync("bearer");
                    SecureStore.deleteItemAsync("user");
                    return {user: undefined};
                }
            }
            return state;
        });
    },
    loadUserSession: async () => {
        try {
            const userSession = await SecureStore.getItemAsync("user");
            if (userSession) {
                set({user: JSON.parse(userSession)});
            }
        } catch (error) {
            console.error("Error loading user session from AsyncStorage", error);
        }
    },
}));
