import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import { useState } from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../_routes/RootStackParams";

const Login = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamsList,
    "Login"
  >;
  const navigation = useNavigation<navigationTypes>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        source={require("../../_assets/images/Logo.png")}
      />

      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"Digite o seu email"}
        icone={require("../../_assets/images/envelope.png")}
        value={email}
      />

      <Input
        onChangeText={(e: string) => setPassword(e)}
        placeholder={"Digite a sua senha"}
        secureTextEntry={true}
        icone={require("../../_assets/images/key.png")}
        value={password}
      />

      <Button
        onPress={() => {}}
        placeholder={"Login"}
        loading={false}
        disabled={false}
      />
      <View style={styles.containerWithAccount}>
        <Text>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.textSignUp}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
