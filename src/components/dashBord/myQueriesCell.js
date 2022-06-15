import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS } from "../../theme/colos";
import { Fonts } from "../../theme/fonts";
import { Images } from "../../assets/images";

export const MyQueriesCell = () => {
  return(
    <View>
      <View style={styles.container}>

        <Text style={styles.txtQueriesMessage}>Lorem Ipsum Dolor Sit Amet, Consectetur {'\n'} Adipiscing Elit. Vestibulum...</Text>

        <View style={styles.containerMessage}>

          <Image style={styles.imageComment} source={Images.comment} />
          <Text style={styles.txtCommentCount}>41</Text>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 15,
    backgroundColor: COLORS.white,
    height: 100,
    marginStart: 20,
    marginTop: 20,
  },
  txtQueriesMessage: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    marginHorizontal: 10,
    marginTop: 15,
    color: COLORS.black,
  },
  containerMessage: {
    flexDirection: "row",
    alignSelf: "flex-end",
    justifyContent: "center",
    marginTop: 10,
  },
  imageComment: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginEnd: 5,
  },
  txtCommentCount: {
    fontFamily: Fonts.semiBold,
    fontSize: 12,
    marginEnd: 10,
  },

});
