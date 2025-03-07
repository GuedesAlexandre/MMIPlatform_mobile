import {ModuleStore} from "@/app/models/module.model";
import {create} from 'zustand';
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export const useModuleStore = create<ModuleStore>((set)=>({
    allModules: undefined,
    fetchModules: async () => {
        const bearer = await SecureStore.getItemAsync("bearer");
        if (!bearer) return;
        try {
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/module/all`,
                {
                    headers: {
                        Authorization: `Bearer ${bearer?.toString()}`,
                    },
                }
            )
            const data = response.data;
            set({allModules: data})
        } catch (error) {
            console.error(error)
        }
    },
}))