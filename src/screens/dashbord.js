import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Images } from "../assets/images";
import { COLORS } from "../theme/colos";
import { Fonts } from "../theme/fonts";
import { Header } from "../components/dashBord/header";
import { TabLayout } from "../components/dashBord/tabLayout";
import { MyQueriesCell } from "../components/dashBord/myQueriesCell";
import { MyQueries } from "../components/dashBord/myQueries";
import { PostCell } from "../components/dashBord/postCell";

export const DashBord = () => {
  return(
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.tabContainer}>
        <TabLayout label={'My Location'}  />
        <TabLayout label={'My Network'}  />
        <TabLayout label={'Groups'}  />
      </View>
      <MyQueries />
      <PostCell />

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

});
