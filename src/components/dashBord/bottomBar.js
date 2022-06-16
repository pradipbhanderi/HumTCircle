import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { COLORS } from "../../theme/colos";
import { Images } from "../../assets/images";
import colors from "react-native/Libraries/NewAppScreen/components/Colors";
import { Fonts } from "../../theme/fonts";

export const BottomBar = () => {
  return(
    <View style={styles.container}>

      <View style={styles.containerBottom}>

        <View style={styles.containerFeed}>
            <Image style={styles.imageFeed} source={Images.feed} />
          <Text style={styles.txtFeed}>Feed</Text>
        </View>
        <View style={styles.containerFeed}>
            <Image style={styles.imagePlus} source={Images.plus} />
        </View>
        <View style={styles.containerFeed}>
            <Image style={styles.imageFeed} source={Images.profile} />
          <Text style={styles.txtProfile}>Profile</Text>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.white,
    height: 60,
  },
  containerBottom: {
    flexDirection: 'row',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {width: 3, height: 3},
    width: '100%',
    justifyContent: 'space-between',
  },
  containerFeed: {
    flexDirection: 'column',
    flex: 1,
    height: 80,
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageFeed: {
    width: 20,
    height: 20,
    marginTop:10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  txtFeed:{
    fontFamily: Fonts.poppinsRegular,
    fontSize: 12,
    alignSelf: "center",
    color:COLORS.theme_color,
  },
  txtProfile:{
    fontFamily: Fonts.poppinsRegular,
    fontSize: 12,
    alignSelf: "center",
    color:COLORS.dark_gray,
  },
  imagePlus: {
    width:40,
    height: 40,
    marginTop:10,
  },

});
