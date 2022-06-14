import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../theme/colos";
import { Images } from "../assets/images";
export const Splash = () => {
  return(
    <View style={styles.containerMain}>
    <Image  source={Images.splash}/>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: COLORS.theme_color,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
});
