import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import Button from "./src/_components/Button";
import Input from "./src/_components/Input";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState<string>("");

  const [fontsLoaded] = useFonts({
    "biennale-bold": require("./assets/fonts/Biennale-Bold.otf"),
    "biennale-regular": require("./assets/fonts/Biennale-Regular.otf")
  });

  return fontsLoaded ? (
    <View style={styles.container}>
      <Button
        onPress={() => {}}
        placeholder={"Clique aqui"}
        loading={false}
        disabled={false}
      />
      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"Digite seu email"}
        value={email}
      />
      <StatusBar style="auto" />
    </View>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
