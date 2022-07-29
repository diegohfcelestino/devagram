import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Header/Search";
import styles from "./styles";
import { IContainer } from "./types";

const Container = (props: IContainer) => {
  const [filter, setFilter] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <Header
        publicationHeader={props.headerProps.publicationHeader}
        editProfileHeader={props.headerProps.editProfileHeader}
        profileHeader={props.headerProps.profileHeader}
        default={props.headerProps.default}
        searchBar={{
          value: filter,
          onChange: (value: string) => setFilter(value)
        }}
      />
      <Search filter={filter} />
      <View style={styles.content}>{props.children}</View>
      <Footer currentTab={props.footerProps.currentTab} />
    </SafeAreaView>
  );
};

export default Container;
