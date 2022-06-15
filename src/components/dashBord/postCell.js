import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS } from "../../theme/colos";
import { Images } from "../../assets/images";
import { Fonts } from "../../theme/fonts";

export const PostCell = () =>{
  return(
    <View style={styles.mainContainer}>

      <View style={styles.postContainer}>

        <View style={styles.container} >

          <View style={styles.ovalContainer}>
            <Image style={styles.imageOval} source={Images.oval} />
          </View>

          <View style={styles.containerName}>
            <Text style={styles.txtName}>John Doe</Text>
            <View style={styles.containerMessageCircle}>
                <Text style={styles.txtMessageCount}>1</Text>
            </View>
            <Text style={styles.txtUploadTime}>1 hours ago</Text>
          </View>

        </View>

        <Text style={styles.txtMessage}>Living in today’s metropolitan world of cellular hones, mobile computers and other high-tech gadgets is not #Trending #Dance #Light</Text>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={Images.photo} />
        </View>

      </View>

    </View>

  );
};

const styles = StyleSheet.create({

  mainContainer:{
    flexDirection: 'column',
  },
  container: {
    flexDirection:'row',
    marginTop: 20,
    marginStart: 15,
  },
  postContainer:{
    borderRadius: 10,
    height: 400,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'column',
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
  txtMessage:{
    marginHorizontal:20,
    justifyContent: "center",
    fontFamily: Fonts.regular,
    marginTop: 8,
    fontSize: 12,
  },
  imageContainer:{
    marginTop: 15,
    marginHorizontal: 20,
  },
  image:{
    width: '100%',
    height:150,
    borderRadius: 8,
  }

});
