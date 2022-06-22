import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { Images } from "../assets/images";
import { COLORS } from "../theme/colos";
import { Fonts } from "../theme/fonts";
import { Header } from "../components/dashBord/header";
import { TabLayout } from "../components/dashBord/tabLayout";
import { MyQueriesCell } from "../components/dashBord/myQueriesCell";
import { MyQueries } from "../components/dashBord/myQueries";
import { PostCell } from "../components/dashBord/post/postCell";
import { BottomBar } from "../components/dashBord/bottomBar";
import { PostList } from "../components/dashBord/post/postList";
import { useNavigation } from "@react-navigation/native";
import { Commands } from "react-native/Libraries/Components/View/ViewNativeComponent";
import { Comment} from "./comment";

const Tab = [
  {
    key: '1',
    label: 'My Location',
    label2: 'My Network',
    label3: 'Groups',

  },
];

export const DashBord = () => {
  const [label, setLabel] = useState(false);
  const navigation = useNavigation();
  return(
    <View style={styles.mainContainer}>
      <Header />
      {Tab.map(element => {
      return(
        <View key={element.key} style={styles.tabContainer}>
          <TabLayout label={element.label} click={() => {
            setLabel(element.label);
          }}
                     isSelect={element.label === label}/>
          <TabLayout label={element.label2}  click={() => {
            setLabel(element.label2);
          }}
                     isSelect={element.label2 === label}/>
          <TabLayout label={element.label3} click={() => {
            setLabel(element.label3);
          }}
                     isSelect={element.label3 === label}/>

        </View>
      );
      })}

      <MyQueries IsMyQueries={true}  />

      <Pressable style={styles.postContainer} onPress={() => {
        navigation.navigate('comment') }} >

      </Pressable>
      <PostList />
      <BottomBar />

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.white_bg,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
  },
  postContainer: {
    paddingBottom: 10,
    flex: 1,
  },

});
