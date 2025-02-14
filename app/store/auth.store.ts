import axios, {AxiosError} from "axios";
import {create} from "zustand";
import JWT from "expo-jwt";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserSessionJWT {
    user: UserJWTtoModel;
    sub: string;
    iat: number;
    exp: number;
    expirationTime?: number;
}

interface UserJWTtoModel {
    firstName: string;
    name: string;
    numEtu: string
    email: string;
    promo: string;
    group: string;
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
                    email: email,
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
            await AsyncStorage.setItem("user", JSON.stringify(dataUser));
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
        await AsyncStorage.removeItem("user");
    },
    checkSessionExpiration: async () => {
        set((state) => {
            if (state.user?.exp) {
                const isExpired = Date.now() > state.user.exp * 1000;
                if (isExpired) {
                    AsyncStorage.removeItem("user");
                    return {user: undefined};
                }
            }
            return state;
        });
    },
    loadUserSession: async () => {
        try {
            const userSession = await AsyncStorage.getItem("user");
            if (userSession) {
                set({user: JSON.parse(userSession)});
            }
        } catch (error) {
            console.error("Error loading user session from AsyncStorage", error);
        }
    },
}));
