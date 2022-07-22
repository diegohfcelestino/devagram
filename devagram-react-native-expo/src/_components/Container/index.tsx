import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles";
import { IContainer } from "./types";

const Container = (props: IContainer) => {
  const [filter, setFilter] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <Header
        default={props.headerProps.default}
        headerNewPublication={props.headerProps.headerNewPublication}
        searchBar={{
          value: filter,
          onChange: (value: string) => setFilter(value)
        }}
      />
      <View style={styles.content}>{props.children}</View>
      <Footer currentTab={props.footerProps.currentTab} />
    </SafeAreaView>
  );
};

export default Container;
