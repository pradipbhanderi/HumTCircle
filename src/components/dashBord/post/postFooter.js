import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Images } from "../../../assets/images";
import { Fonts } from "../../../theme/fonts";
import { COLORS } from "../../../theme/colos";

export const PostFooter = ({IsPost,likeCount,commentCount,time}) => {
  return(

    <View>
      {
        IsPost ?
          <View style={styles.mainContainer}>
              <Image style={styles.imageLike} source={Images.like} />
              <Text style={styles.likeNumber}>{likeCount} </Text>
              <Image style={styles.imageLike} source={Images.comment} />
              <Text style={styles.commentNumber}>{commentCount} </Text>
              <Image style={styles.imageReport} source={Images.report} />
              <Text style={styles.txtUploadTime}>{time}</Text>
          </View>
        :
          <View style={styles.mainContainer}>
              <Image style={styles.imageLike} source={Images.like} />
              <Text style={styles.likeNumber}>{likeCount} </Text>
              <Image style={styles.imageLike} source={Images.comment} />
              <Text style={styles.commentNumber}>{commentCount} </Text>
              <Image style={styles.imageReport} source={Images.report} />
              <Text style={styles.txtUploadTime}>{time}</Text>
          </View>
      }
    </View>


  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: 10,
    flex: 1
  },
  container: {
    flexDirection: 'row'
  },
  imageLike: {
    width: 25,
    height: 25,
    marginStart: 20,
  },
  likeNumber: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: COLORS.theme_color,
    marginStart: 5,
    alignSelf: 'center',
  },
  commentNumber: {
    fontFamily: Fonts.semiBold,
    fontSize: 14,
    color: COLORS.dark_gray,
    marginStart: 2,
    alignSelf: 'center',
  },
  imageReport: {
    width: 20,
    height: 20,
    marginTop: 2,
    marginStart: 20,
  },
  txtUploadTime: {
    fontSize:10,
    fontFamily: Fonts.semiBold,
    alignSelf: "center",
    flex: 1,
    textAlign: 'right',
    marginEnd: 20,
  },
});
