import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text>
        <Link href={"/sign-up"} asChild>
          <Pressable>
            <Text>Go sign-up</Text>
          </Pressable>
        </Link>
      </Text>
    </View>
  );
}
