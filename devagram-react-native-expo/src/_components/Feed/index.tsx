import { useState } from "react";
import { View } from "react-native";
import { IUserData } from "../../_services/UserService/types";

const Feed = (props: { isProfileFeed?: boolean; profile: IUserData }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loadPosts = async () => {
    if ((props.isProfileFeed && props.profile.id) || !props.isProfileFeed) {
      try {
        setIsLoading(true);
      } catch (err: any) {
        setIsLoading(false);
      }
    }
  };
  return <View></View>;
};

export default Feed;
