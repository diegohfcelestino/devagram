import { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { IUserData } from "../../_services/UserService/types";
import * as FeedService from "../../_services/FeedService";
import { IPost } from "./Post/types";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../../_routes/RootStackParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Post from "./Post";
import { colors } from "../../../app.json";

const Feed = (props: { isProfileFeed?: boolean; profile?: IUserData }) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamsList, "Home">;
  const navigation = useNavigation<navigationTypes>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    loadPosts();
    navigation.addListener("focus", () => {
      loadPosts();
    });
  }, [props]);

  const loadPosts = async () => {
    if ((props.isProfileFeed && props.profile?.id) || !props.isProfileFeed) {
      try {
        setIsLoading(true);
        const { data } = await FeedService.getPosts(props?.profile?.id);
        const postsFormated: IPost[] = data.map((post: any) => {
          const postFormated: IPost = {
            id: post._id,
            image: post.foto,
            description: post.descricao,
            user: {
              name: post.usuario.nome,
              avatar: post.usuario.avatar,
              id: "",
              email: "",
              token: ""
            },
            comments: post.comentarios.map((c: any) => {
              return {
                name: c.nome,
                message: c.comentario,
                userId: c.usuarioId
              };
            }),
            likes: post.likes
          };
          return postFormated;
        });
        setPosts(postsFormated);
        setIsLoading(false);
      } catch (err: any) {
        setIsLoading(false);
      }
    }
  };
  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Post />}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          isLoading ? (
            <View>
              <ActivityIndicator size={30} color={colors.primaryColor} />
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Feed;
