import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IUser, IUserData } from "../../_services/UserService/types";
import styles from "./styles";
import { colors } from "../../../app.json";

const Avatar = (props: { image: string | null }) => {
  return (
    <TouchableOpacity>
      <Image
        style={styles.imageUser}
        source={
          props.image
            ? { uri: props.image }
            : require("../../_assets/images/user.png")
        }
      />
    </TouchableOpacity>
  );
};

export default Avatar;
