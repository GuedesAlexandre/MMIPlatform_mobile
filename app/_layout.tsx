import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { View, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <View
        style={[styles.background, { backgroundColor: Colors["primary-blue"] }]}
      >
        <View
          style={[styles.card, { backgroundColor: Colors["background-color"] }]}
        >
          <Slot />
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  card: {
    width: "100%",
    height: "75%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    padding: 20,
  },
});
