import React from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../theme/colos";
import { Images } from "../assets/images";
import { Fonts } from "../theme/fonts";
import { useNavigation } from "@react-navigation/native";

export const Phone = () => {
  const navigation = useNavigation();
  return(
    <View style={styles.containerMain}>
      <View style={styles.topContainer}>
        <View style={styles.backArrowContainer}>
          <Image style={styles.imageBacK} source={Images.arrowLeft} />
        </View>
        <Text style={styles.txtWelcome}>Welcome!</Text>
        <Text style={styles.txtMes}>HumT is a community of people {'\n'} for lorem ipsum dolor sit amet</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{height:100}}/>
        <View>

          <View style={styles.inputTextContainer}>
            <Image style={styles.imagePhone} source={Images.phone} />
            <TextInput style={styles.inputText} placeholder={'123 456 7890'}
                       keyboardType={"numeric"} maxLength={10}
            />
          </View>
          <View style={styles.containerPhone}>
            <Text style={styles.txtPhone}>Phone NO</Text>
          </View>
        </View>

        <Text style={styles.otpMessage}>An OTP will be sent to your number </Text>
        <View style={styles.sendOtpContainer}>
          <Text style={styles.txtOtp}>Send OTP</Text>
          <Pressable onPress={() => {
            navigation.navigate('otp') }}>
            <Image style={styles.imageProceed} source={Images.go_proceed} />
          </Pressable>

        </View>
        <Image style={styles.imageWatermarks} source={Images.watermarks} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: COLORS.theme_color,
    flexDirection: 'column'
  },
  backArrowContainer: {
    height: 40,
    width: 40,
    marginTop: 20,
    marginStart: 10,
    justifyContent: 'center',
  },
  imageBacK: {
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignSelf:"center",
  },
  txtWelcome: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    marginStart: 20,
    marginTop: 20,
    color: COLORS.white,
  },
  txtMes: {
    fontFamily: Fonts.semiBold,
    fontSize: 13,
    color: COLORS.white,
    marginTop: 20,
    marginStart: 20,
  },
  topContainer: {
    flex:0.3
  },
  bottomContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 0.7,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
  },
  containerPhone: {
    backgroundColor: COLORS.white,
    height:20,
    top:-10,
    marginStart: 55,
    position:"absolute"
  },
  txtPhone: {
    fontSize: 12,
    fontFamily: Fonts.medium,
  },
  inputTextContainer: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    top: -2,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: COLORS.gray,
    marginHorizontal: 40,

  },
  imagePhone: {
    marginStart: 10,
  },
  inputText: {
    marginStart: 10,
    color: COLORS.black,
  },
  otpMessage: {
    fontFamily: Fonts.medium,
    fontSize: 11,
    marginStart: 40,
    marginTop: 5,
    color: COLORS.dark_gray,
  },
  sendOtpContainer: {
    marginTop:30,
    marginStart:50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtOtp: {
    fontFamily: Fonts.semiBold,
    color: COLORS.black,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imageProceed: {
    width: 130,
    height: 130

  },
  imageWatermarks: {
    marginTop: 40,
    alignSelf: 'center',
  },
});
