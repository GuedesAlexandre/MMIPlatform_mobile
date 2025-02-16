import {useFonts} from "expo-font";
import {Slot, useRouter} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {StatusBar} from "expo-status-bar";
import {useEffect} from "react";
import "react-native-reanimated";
import {View, StyleSheet, Alert, Pressable} from "react-native";
import {Colors} from "@/constants/Colors";
import Logo from "../assets/images/logo.svg";
import LogoMini from "../assets/images/logo_mini.svg"
import {useAuthStore} from "@/app/store/auth.store";
import {LogOut} from "lucide-react-native";
import {useAuthMiddleware} from "@/app/_middleware";
import {stylesLayout} from "@/app/styles/_styles";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    useAuthMiddleware()
    const [loadedFont] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    const router = useRouter();
    const {user, removeUserSession, loadUserSession} = useAuthStore();

    useEffect(() => {
        loadUserSession();
    }, []);

    const showAlert = () => {
        Alert.alert(
            "Déconnexion",
            "Êtes-vous sûr de vouloir vous déconnecter ?",
            [
                {
                    text: "Annuler",
                    style: "cancel",
                },
                {
                    text: "Se déconnecter",
                    onPress: () => {
                        removeUserSession();
                        router.push("/");
                    },
                    style: "destructive",
                },
            ],
            {cancelable: true}
        );
    };

    useEffect(() => {
        if (user){
            router.push("/home");
        }
        if (loadedFont) {
            SplashScreen.hideAsync();
        }
    }, [loadedFont]);

    if (!loadedFont) {
        return null;
    }

    return (
        <>
            <View
                style={[stylesLayout.background, {backgroundColor: Colors["primary-blue"]}]}
            >
                {
                    user === undefined ?
                        <View style={stylesLayout.logo}>
                            <Logo width={"75%"} style={[{alignSelf: "center"}]}/>
                        </View>
                        :
                        <View style={stylesLayout.logoMiniContainer}>
                            <Pressable onPress={() => router.push("/home")}>
                                <LogoMini width={50} height={50}/>
                            </Pressable>
                            <LogOut onPress={showAlert} strokeWidth={1.5} size={35}
                                    color={Colors["background-color"]}/>
                        </View>
                }
                <View
                    style={[
                        user === undefined ? {height: "77.5%"} : {height: "82.5%"},
                        {backgroundColor: Colors["background-color"]},
                        stylesLayout.card
                    ]}
                >
                    <Slot/>
                </View>
            </View>
            <StatusBar style="auto"/>
        </>
    );
}
