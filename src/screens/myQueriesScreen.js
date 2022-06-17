import React from "react";
import { MyQueries } from "../components/dashBord/myQueries";
import { StyleSheet,View } from "react-native";
import { Header } from "../components/dashBord/header";
import { CommonHeader} from "../components/common/commonheader";

export const MyQueriesScreen = () => {
  return(
    <View style={styles.container} >

      <CommonHeader title={'My Queries'}/>

      <MyQueries IsMyQueries={false} />

    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    marginEnd: 20,
    marginTop:30,
    flexDirection: 'column',
  }
});
