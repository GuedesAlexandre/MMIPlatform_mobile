import { useEffect } from "react";
import { useAuthStore } from "@/app/store/auth.store";
import { useRouter, useRootNavigationState } from "expo-router";

export const useAuthMiddleware = () => {
    const router = useRouter();
    const { user } = useAuthStore();
    const navigationState = useRootNavigationState();

    useEffect(() => {
        if (!navigationState?.key) return;

        if (user?.user) {
            router.replace("/home");
        } else {
            router.replace("/");
        }
    }, [user]);
};