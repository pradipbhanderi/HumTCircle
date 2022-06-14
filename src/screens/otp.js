import React from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Images } from "../assets/images";
import { COLORS } from "../theme/colos";
import { Fonts } from "../theme/fonts";
import { useNavigation } from "@react-navigation/native";

export const Otp = () => {
  const navigation = useNavigation();
  return(
    <View style={styles.containerMain}>
      <View style={styles.topContainer}>
        <View style={styles.backArrowContainer}>
          <Image style={styles.imageBacK} source={Images.arrowLeft} />
        </View>
        <Text style={styles.txtOtp}>OTP!</Text>
        <Text style={styles.txtMes}>Enter OTP of your Register mobile {'\n'}number and go ahead</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.containerPhone}>
          <Text style={styles.txtPhone}>Enter OTP</Text>
        </View>
        {/*otp container*/}
        <View style={styles.otpContainer}>
          <View style={styles.inputTextContainer}>
            <TextInput style={styles.inputText} placeholder={'-'}
                       keyboardType={"numeric"} maxLength={1}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput style={styles.inputText} placeholder={'_'}
                       keyboardType={"numeric"} maxLength={1}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput style={styles.inputText} placeholder={'-'}
                       keyboardType={"numeric"} maxLength={1}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput style={styles.inputText} placeholder={'-'}
                       keyboardType={"numeric"} maxLength={1}
            />
          </View>
        </View>
        <Text style={styles.txtReset}>Resend</Text>
        <View style={styles.sendOtpContainer}>
          <Text style={styles.txtContinue}>Continue</Text>
          <Pressable onPress={() => {
            navigation.navigate('register') }}>
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
  topContainer: {
    flex:0.3
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
  txtOtp: {
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
  bottomContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 0.7,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
  },
  containerPhone: {
    backgroundColor: COLORS.white,
    width: 100,
    height:20,
    marginTop: 60,
    marginStart: 55,
  },
  txtPhone: {
    fontSize: 12,
    fontFamily: Fonts.medium,
  },
  otpContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 30,
  },
  inputTextContainer: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    width: 50,
    height:50,
    marginStart: 20,
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: COLORS.gray,
  },
  inputText: {
    marginStart: 10,
    color: COLORS.black,
  },
  txtReset: {
    fontFamily: Fonts.medium,
    color: COLORS.theme_color,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  sendOtpContainer: {
    marginStart:50,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtContinue: {
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
    marginTop: 30,
    alignSelf: 'center',
  },
});
