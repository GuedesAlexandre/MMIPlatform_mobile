import { create } from "zustand";
import axios from "axios";
import { UserInformationStore } from "@/app/models/userInformation.model";
import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants";

export const useUserInformation = create<UserInformationStore>((set) => ({
  userInformation: undefined,
  getUserInformation: async (numEtu) => {
    const bearer = await SecureStore.getItemAsync("bearer");
    if (!bearer) return;
    try {
      const response = await axios.get(
        `${Constants.expoConfig?.extra?.EXPO_PUBLIC_API_URL}/student/search/${numEtu}`,
        {
          headers: {
            Authorization: `Bearer ${bearer.toString()}`,
          },
        }
      );
      const data = response.data;
      set({ userInformation: data });
    } catch (error) {
      console.error(
        `Erreur lors de la récupération des informations de l'utilisateur : ${error}`
      );
    }
  },
}));
