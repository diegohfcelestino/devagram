import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import { useState } from "react";
import styles from "./styles";
import UploadImage from "../../_components/UploadImage";

const Register = () => {
  const [image, setImage] = useState<any>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UploadImage setImage={setImage} image={image} />
      <Input
        onChangeText={(e: string) => setName(e)}
        placeholder={"Nome completo"}
        icone={require("../../_assets/images/user.png")}
        value={name}
      />

      <Input
        onChangeText={(e: string) => setEmail(e)}
        placeholder={"E-mail"}
        icone={require("../../_assets/images/envelope.png")}
        value={email}
      />

      <Input
        onChangeText={(e: string) => setPassword(e)}
        placeholder={"Senha"}
        secureTextEntry={true}
        icone={require("../../_assets/images/key.png")}
        value={password}
      />

      <Input
        onChangeText={(e: string) => setConfirmPassword(e)}
        placeholder={"Confirmar Senha"}
        secureTextEntry={true}
        icone={require("../../_assets/images/key.png")}
        value={confirmPassword}
      />

      <Button
        onPress={() => {}}
        placeholder={"Cadastrar"}
        loading={false}
        disabled={false}
      />
      <View style={styles.containerWithOutAccount}>
        <Text>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.textSignIn}>Faça seu login agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
