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

         <PostHeader messageCount={2} name={'John Doe'} uploadTime={'1 hours ago'} />

        <Post IsImages={true} image={Images.photo} message={'Living in today’s metropolitan world of cellular hones, mobile computers and other high-tech gadgets is not #Trending #Dance #Light'} />
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
