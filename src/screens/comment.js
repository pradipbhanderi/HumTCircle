import React from "react";
import { View,StyleSheet } from "react-native";
import { CommonHeader } from "../components/common/commonheader";
import { PostHeader } from "../components/dashBord/post/postHeader";
import { Post } from "../components/dashBord/post/post";
import { PostFooter } from "../components/dashBord/post/postFooter";
import { COLORS } from "../theme/colos";

export const Comment = () => {
  return(
    <View style={styles.mainContainer}>

      <CommonHeader title={'comment'} />

      <View style={styles.postContainer}>

        <PostHeader name={'Julliya Robert'}  uploadTime={'3:00 PM'} messageCount={3} />

        <Post IsImages={false} message={'Living in today’s metropolitan world of cellular hones, mobile computers and other high-tech gadgets is not #Trending #Dance #Light'} />
        <View style={styles.footerContainer}>
          <PostFooter />
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    marginTop: 30,
  },
  postContainer:{
    borderRadius: 10,
    height: 210,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'column',
  },

  footerContainer: {
    flexDirection: 'row',
  },

});
