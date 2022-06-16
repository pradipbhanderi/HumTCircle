import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS } from "../../../theme/colos";
import { Images } from "../../../assets/images";
import { Fonts } from "../../../theme/fonts";
import { PostHeader } from "./postHeader";
import { Post } from "./post";
import { PostFooter } from "./postFooter";

export const PostCell = () => {
  return(
    <View style={styles.mainContainer}>

      <View style={styles.postContainer}>

         <PostHeader />

        <Post />
        <View style={styles.footerContainer}>
          <PostFooter />
        </View>



      </View>

    </View>

  );
};

const styles = StyleSheet.create({

  mainContainer:{
    flexDirection: 'column',
  },

  postContainer:{
    borderRadius: 10,
    height: 400,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'column',
  },

  footerContainer: {
    flexDirection: 'row',
  },



});
