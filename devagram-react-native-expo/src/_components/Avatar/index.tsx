import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../_routes/RootStackParams";
import styles from "./styles";
import { colors } from "../../../app.json";
import { LinearGradient } from "expo-linear-gradient";
import { IAvatar } from "./types";

const Avatar = (props: IAvatar) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, "Home">;
  const navigation = useNavigation<navigationTypes>();

  return props.withBorder ? (
    <LinearGradient
      style={styles.borderImage}
      colors={[colors.primaryColor, colors.greenWaterColor]}
    >
      <Image
        style={styles.imageUserWithBorder}
        source={
          props.image
            ? { uri: props.image.uri }
            : props.user.avatar
            ? { uri: props.user.avatar }
            : require("../../_assets/images/user.png")
        }
      />
    </LinearGradient>
  ) : (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Profile", props.user);
      }}
    >
      <Image
        style={styles.imageUser}
        source={
          props.user.avatar
            ? { uri: props.user.avatar }
            : require("../../_assets/images/user.png")
        }
      />
    </TouchableOpacity>
  );
};

export default Avatar;
