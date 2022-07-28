import { IUser, IUserData } from "../_services/UserService/types";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Profile: IUserData | IUser | undefined;
  EditProfile: IUserData | IUser | undefined;
  Publication: undefined;
};
