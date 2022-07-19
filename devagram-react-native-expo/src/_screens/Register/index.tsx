import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../../_components/Button";
import Input from "../../_components/Input";
import { useEffect, useState } from "react";
import styles from "./styles";
import UploadImage from "../../_components/UploadImage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import communStyles from "../../communStyles";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword
} from "../../_utils/validations";

const Register = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamsList,
    "Register"
  >;
  const navigation = useNavigation<navigationTypes>();
  const [erro, setErro] = useState<string>("");
  const [image, setImage] = useState<any>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const formIsValid = () => {
    const nameIsValid = validateName(name);
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const confirmPasswordIsValid = validateConfirmPassword(
      password,
      confirmPassword
    );
    setErro("");
    if (!nameIsValid && name != "") {
      setErro("Nome inválido");
    } else if (!emailIsValid && email != "") {
      setErro("Email inválido");
    } else if (!passwordIsValid && password != "") {
      setErro("Senha inválida");
    } else if (!confirmPasswordIsValid && confirmPassword != "") {
      setErro("Confirmação de senha não confere");
    } else {
      setErro("");
    }
  };

  useEffect(() => {
    formIsValid();
  }, [name, email, password, confirmPassword]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UploadImage setImage={setImage} image={image} />
      {erro != "" && <Text style={communStyles.textError}>{erro}</Text>}
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
        disabled={
          erro != "" ||
          name == "" ||
          email == "" ||
          password == "" ||
          confirmPassword == ""
        }
      />
      <View style={styles.containerWithOutAccount}>
        <Text>Já possui uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textSignIn}>Faça seu login agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
