import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import Container from "../../_components/Container";
import Feed from "../../_components/Feed";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import * as UserService from "../../_services/UserService";
import { IUser, IUserData } from "../../_services/UserService/types";

const Profile = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamsList,
    "Profile"
  >;
  const navigation = useNavigation<navigationTypes>();
  const profileParams = navigation
    .getState()
    .routes.find(route => route.name === "Profile")?.params;
  const [userLogged, setUserLogged] = useState<IUser>();
  const [profile, setProfile] = useState<IUserData>();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const user = await UserService.getCurrentUser();
      setUserLogged(user);
      console.log(profileParams);
      var profile;
      if (profileParams && profileParams.id) {
        profile = await UserService.getProfile(profileParams.id);
      } else if (user && user.id) {
        profile = await UserService.getProfile(user.id);
      }

      if (profile) {
        const profileFormated: IUserData = {
          id: profile.data._id,
          name: profile.data.nome,
          avatar: profile.data.avatar,
          email: profile.data.email,
          posts: profile.data.publicacoes,
          followers: profile.data.seguidores,
          following: profile.data.seguindo,
          followThisUser:
            profile.data.segueEsseUsuario != undefined
              ? profile.data.segueEsseUsuario
              : false
        };
        setProfile(profileFormated);
      }
    } catch (err: any) {
      Alert.alert("Erro", "Erro ao carregar dados do perfil");
      console.log("error", err);
    }
  };

  return (
    <Container
      headerProps={{
        profileHeader: {
          userName: profile?.name || "",
          isExternalProfile: userLogged?.id == profile?.id ? false : true
        }
      }}
      footerProps={{
        currentTab: userLogged?.id == profile?.id ? "Profile" : "Home"
      }}
    >
      <Feed isProfileFeed={true} profile={profile} />
    </Container>
  );
};

export default Profile;
