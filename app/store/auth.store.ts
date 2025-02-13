import axios, { AxiosError } from "axios";
import { create } from "zustand";
import JWT from "expo-jwt";

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
      set({ user: dataUser });
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
      return { error: "Une erreur interne est survenue." };
    }
  },
  removeUserSession: () => {
    set({ user: undefined });
  },
  checkSessionExpiration: () => {
    set((state) => {
      if (state.user?.exp) {
        const isExpired = Date.now() > state.user.exp * 1000;
        if (isExpired) {
          return { user: undefined };
        }
      }
      return state;
    });
  },
}));
