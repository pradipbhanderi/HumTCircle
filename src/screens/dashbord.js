import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Images } from "../assets/images";
import { COLORS } from "../theme/colos";
import { Fonts } from "../theme/fonts";
import { Header } from "../components/dashBord/header";

export const DashBord = () => {
  return(
    <View style={styles.mainContainer}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.white_bg,
  },

});
