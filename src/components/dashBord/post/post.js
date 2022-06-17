import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Images } from "../../../assets/images";
import { Fonts } from "../../../theme/fonts";
import { COLORS } from "../../../theme/colos";

export const Post = ({IsImages,image,message}) => {
  return (
    <View>
      {
        IsImages?
          <View >
            <Text style={styles.txtMessage}>{message}</Text>

            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image} />
            </View>

            <View style={styles.border}/>
          </View>
        :
          <View >
            <Text style={styles.txtMessage}>{message}</Text>
            <View style={styles.border}/>
          </View>
      }
    </View>

  );
};

const styles = StyleSheet.create({

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
  },
  border:{
    borderWidth: 0.3,
    borderColor: COLORS.gray,
    marginTop: 10,
  },

});
