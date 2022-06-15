import React from "react";
import { Text, View,StyleSheet } from "react-native";
import { COLORS } from "../../theme/colos";
import { Fonts } from "../../theme/fonts";

export const TabLayout = ({label}) => {
  return(
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.txtMyLocation} >
          {label}
        </Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row'
  },
  container: {
    borderRadius:10,
    width:100,
    height:40,
    marginStart: 10,
    justifyContent: "center",
    backgroundColor: COLORS.white
  },
  txtMyLocation: {
    fontFamily: Fonts.medium,
    justifyContent: "center",
    color: COLORS.theme_color,
    fontSize: 12,
    alignSelf: 'center',
  },
});
