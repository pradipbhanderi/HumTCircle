import React from "react";
import { MyQueries } from "../components/dashBord/myQueries";
import { StyleSheet,View } from "react-native";export const MyQueriesScreen = () => {
  return(
    <View style={styles.container} >
      <MyQueries IsMyQueries={false} />
    </View>

  );
};

const styles = StyleSheet.create({
  container:{
    marginEnd: 20,
  }
});
