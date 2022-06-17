import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../theme/colos";
import { Fonts } from "../../theme/fonts";

export const Buttons = ({buttonLabel}) => {
  return (

    <View style={styles.containerButton}>
        <Text style={styles.txtButton}>{buttonLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    borderRadius: 25,
    backgroundColor: COLORS.theme_color,
    marginHorizontal: 30,
    marginTop:20,
    justifyContent: "center",
    height:50,
  },
  txtButton: {
    fontFamily:Fonts.semiBold,
    color: COLORS.white,
    textAlign: "center",
    fontSize: 15,
  }

});
