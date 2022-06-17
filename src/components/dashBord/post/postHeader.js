import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Images } from "../../../assets/images";
import { Fonts } from "../../../theme/fonts";
import { COLORS } from "../../../theme/colos";

export const PostHeader = ({name,uploadTime,messageCount}) => {
  return (
    <View style={styles.container} >

      <View style={styles.ovalContainer}>
        <Image style={styles.imageOval} source={Images.oval} />
      </View>

      <View style={styles.containerName}>
        <Text style={styles.txtName}>{name}</Text>
        <View style={styles.containerMessageCircle}>
          <Text style={styles.txtMessageCount}>{messageCount}</Text>
        </View>
        <Text style={styles.txtUploadTime}>{uploadTime}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginTop: 20,
    marginStart: 15,
  },
  ovalContainer: {
    width:50,
    height:50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOval:{
    width: 50,
    height:50,
  },
  containerName:{
    flexDirection: 'column',
    justifyContent: "center",
    flex: 1,
    marginTop:5,
    marginStart: 10,
  },
  txtName: {
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    color: COLORS.black,
  },
  containerMessageCircle:{
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginEnd: 20,
    top: -10,
    borderColor: COLORS.theme_color,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  txtMessageCount:{
    alignItems: 'center',
    fontSize: 10,
    fontFamily: Fonts.semiBold,
    color: COLORS.theme_color,
  },
  txtUploadTime:{
    top: -10,
    fontFamily: Fonts.regular,
    fontSize: 10,
    color: COLORS.dark_gray,
  },

});
