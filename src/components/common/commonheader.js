import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Images } from "../../assets/images";
import { COLORS } from "../../theme/colos";
import { Fonts } from "../../theme/fonts";

export const CommonHeader = ({title}) => {
  return(
   <View style={Styles.mainContainer}>
     <View style={Styles.menuContainer}>
       <Image style={Styles.imageMenu} source={Images.backArrow} />
     </View>

     <Text style={Styles.txtMyQueries}>{title}</Text>

   </View>
  );
};

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginStart: 5,
  },
  menuContainer: {
    borderRadius: 10,
    width: 40,
    height: 40,
    marginStart: 15,
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: COLORS.white,

  },
  imageMenu: {
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
  txtMyQueries: {
    fontFamily: Fonts.semiBold,
    fontSize:16,
    right:20,
    flex:1,
    alignSelf: 'center',
    color: COLORS.black,
    textAlign: "center",

  },
});


