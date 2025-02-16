import {useEffect} from "react";
import {useAuthStore} from "@/app/store/auth.store";
import {useRouter, useRootNavigationState, useSegments} from "expo-router";

export const useAuthMiddleware = () => {
    const router = useRouter();
    const {user, checkSessionExpiration} = useAuthStore();
    const navigationState = useRootNavigationState();
    const protectedPath = ["home", "grades"];
    const segments = useSegments();

    useEffect(() => {
        if (!navigationState?.key) return;
        checkSessionExpiration();
        const currentRoute = segments[0];
        if (user && currentRoute === undefined) {
            router.push("/home")
        }
        if (!user && protectedPath.includes(currentRoute)) {
            router.push("/")
        }
    }, [user, segments]);
};