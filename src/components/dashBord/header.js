import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Images } from "../../assets/images";
import { COLORS } from "../../theme/colos";
import { Fonts } from "../../theme/fonts";

export const Header = () =>{
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.menuContainer}>
          <Image style={styles.imageMenu} source={Images.menu} />
        </View>
        <View style={styles.containerLocation}>
          <Text style={styles.txtLocationDropdown}> Location</Text>
          <Text style={styles.txtLocation}>New Jersey(North) </Text>
        </View>
        <View style={styles.notificationContainer}>
          <Image style={styles.imageNotification} source={Images.notification} />
        </View>
    </View>
      <View style={styles.container}>
        <Text >
          My Location
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column'
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  menuContainer: {
    borderRadius: 10,
    width: 30,
    height: 30,
    marginStart: 15,
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: COLORS.white,

  },
  imageMenu: {
    width: 12,
    height: 12,
    alignSelf: 'center',
  },
  containerLocation: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  txtLocationDropdown: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    alignSelf: "center",
    color: COLORS.dark_gray,
  },
  txtLocation: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    alignSelf: "center",
    color: COLORS.black,
  },
  notificationContainer: {
    borderRadius: 10,
    width: 30,
    height: 30,
    marginEnd: 15,
    justifyContent: 'center',
    elevation: 2,
    backgroundColor: COLORS.white,

  },
  imageNotification: {
    width: 12,
    height: 12,
    alignSelf: 'center',
  },
  container: {
    borderRadius:10,
    width:100,
    height:40,
    justifyContent: "center",

    backgroundColor: COLORS.white
  },
  txtMyLocation: {
    fontFamily: Fonts.medium,
    justifyContent: "center",
  },
});

