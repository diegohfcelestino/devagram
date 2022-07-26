import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { post } from "../../../_services/DevagramApiService";
import { getCurrentUser } from "../../../_services/UserService";
import { IUser } from "../../../_services/UserService/types";
import styles from "./styles";
import { IPost } from "./types";

const Post = (props: { post: IPost }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [commented, setCommented] = useState<boolean>(false);
  const [numberOfLines, setNumberOfLines] = useState<number | undefined>(2);
  const [userLogged, setUserLogged] = useState<IUser>();

  useEffect(() => {
    verifyLiked();
  }, []);

  const toggleLike = async () => {
    setLiked(!liked);
  };

  const verifyLiked = async () => {
    const user = await getCurrentUser();
    setUserLogged(user);
    if (user.id) {
      setLiked(props.post.likes.includes(user.id));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerUser}>
        <TouchableOpacity>
          <Image
            style={styles.imageUser}
            source={
              props.post.user.avatar
                ? { uri: props.post.user.avatar }
                : require("../../../_assets/images/user.png")
            }
          />
        </TouchableOpacity>
        <Text style={styles.textUserName}>{props.post.user.name}</Text>
      </View>
      <View>
        <Image style={styles.postImage} source={{ uri: props.post.image }} />
      </View>
      <View style={styles.containerLikeAndComment}>
        <TouchableOpacity onPress={() => toggleLike()}>
          <Image
            style={styles.icon}
            source={
              liked
                ? require("../../../_assets/images/liked.png")
                : require("../../../_assets/images/notLiked.png")
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={
              commented
                ? require("../../../_assets/images/commented.png")
                : require("../../../_assets/images/notCommented.png")
            }
          />
        </TouchableOpacity>
        <Text style={styles.textLike}>
          Curtido por{" "}
          <Text style={[styles.textLike, styles.TextLikeBold]}>
            {props.post.likes.length} pessoas
          </Text>
        </Text>
      </View>
      <View style={styles.containerDescription}>
        <Text numberOfLines={numberOfLines} style={styles.textDescription}>
          <Text style={styles.textUserName}>{props.post.user.name}</Text>
          {" " + props.post.description}
        </Text>
        {props.post.description.length > 90 && (
          <TouchableOpacity
            style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
            onPress={() => setNumberOfLines(numberOfLines ? undefined : 2)}
          >
            <Text style={styles.textMoreOrLess}>
              {!numberOfLines ? "menos" : "mais"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Post;
