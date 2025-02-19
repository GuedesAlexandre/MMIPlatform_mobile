import {create} from 'zustand';
import axios from "axios";
import {UserInformationStore} from "@/app/models/userInformation.model";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useUserInformation = create<UserInformationStore>((set) => ({
    userInformation: undefined,
    getUserInformation: async (numEtu) => {
        const bearer = await AsyncStorage.getItem("bearer");
        if (!bearer) return;
        try {
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/student/search/${numEtu}`,
                {
                    headers: {
                        // Authorization: `Bearer ${bearer.toString()}`,
                    },
                }
            )
            const data = response.data;
            set({userInformation: data})
        } catch (error) {
            console.error(error)
        }
    },
}))