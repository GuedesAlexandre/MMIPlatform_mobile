import {create} from 'zustand';
import axios from "axios";
import {SignatureSheetStore} from "@/app/models/signatureSheet.model";
import * as SecureStore from "expo-secure-store";

const useSignatureSheets = create<SignatureSheetStore>((set) => ({
    signatureSheets: undefined,
    fetchSignatureSheets: async (promo, numEtu) => {
        const bearer = await SecureStore.getItemAsync("bearer");
        if (!bearer) return;
        try {
            const response = await axios.get(
                `${process.env.EXPO_PUBLIC_API_URL}/sheets/${promo}/${numEtu}`,
                {
                    headers: {
                        Authorization: `Bearer ${bearer.toString()}`,
                    },
                }
            )
            const data = response.data;
            set({signatureSheets: data});
        } catch (error) {
            console.error(`Erreur lors de la récupération des feuilles d'émargement : ${error}`);
        }
    }
}))

export default useSignatureSheets;