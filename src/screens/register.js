import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Images } from "../assets/images";
import { COLORS } from "../theme/colos";
import { Fonts } from "../theme/fonts";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";


const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

export const Register = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation();
  return(
    <View style={styles.containerMain}>
      <View style={styles.topContainer}>
        <View style={styles.backArrowContainer}>
          <Image style={styles.imageBacK} source={Images.arrowLeft} />
        </View>
        <Text style={styles.txtRegister}>Register</Text>
        <Text style={styles.txtMes}>No account associated with this number.</Text>
        <Text style={styles.txtRegisterMes}>Register to join the HumT community</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.containerPhone}>
          <Text style={styles.txtUser}>user Name</Text>
        </View>
        <View style={styles.inputTextContainer}>
          <Image style={styles.imageUser} source={Images.user} />
          <TextInput style={styles.inputText} placeholder={'User Name'} />
        </View>
        <Text style={styles.txtCountry}>Country</Text>
        <View style={styles.containerDropdownCountry}>
          <Dropdown
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            maxHeight={300}
            data={data}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }} />
        </View>
        <Text style={styles.txtState}>State</Text>
        <View style={styles.containerDropdownState}>
          <Dropdown
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            maxHeight={300}
            data={data}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }} />
        </View>
        <Text style={styles.txtCity}>City</Text>
        <View style={styles.containerDropdownCity}>
          <Dropdown
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            maxHeight={300}
            data={data}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }} />
        </View>
        <Text style={styles.txtRegion}>Region</Text>
        <View style={styles.containerDropdownRegion}>
          <Dropdown
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            maxHeight={300}
            data={data}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }} />
        </View>
        <View style={styles.sendOtpContainer}>
          <View>
            <Text>I agree to terms & conditions</Text>
          </View>
          <Pressable onPress={() => {
            navigation.navigate('dashBord') }}>
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
    flex:0.2,
  },
  backArrowContainer: {
    height: 40,
    width: 40,
    marginTop: 10,
    marginStart: 10,
    justifyContent: 'center',
  },
  imageBacK: {
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignSelf:"center",
  },
  txtRegister: {
    fontFamily: Fonts.bold,
    fontSize: 22,
    marginStart: 20,
    marginTop: 10,
    color: COLORS.white,
  },
  txtMes: {
    fontFamily: Fonts.semiBold,
    fontSize: 13,
    color: COLORS.white,
    marginTop: 10,
    marginStart: 20,
  },
  txtRegisterMes: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: COLORS.white,
    marginTop: 4,
    marginStart: 20,
  },
  bottomContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 0.8,
    marginTop:20,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
  },
  containerPhone: {
    backgroundColor: COLORS.white,
    width: 100,
    height:20,
    marginTop: 10,
    marginStart: 55,
  },
  txtUser: {
    fontSize: 12,
    fontFamily: Fonts.medium,
  },
  inputTextContainer: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: COLORS.gray,
    marginHorizontal: 40,
  },
  imageUser: {
    marginStart: 10,
  },
  inputText: {
    marginStart: 10,
    color: COLORS.black,
  },
  txtCountry: {
    fontSize: 12,
    marginStart:50,
    marginTop:10,
    fontFamily: Fonts.medium,
  },
  containerDropdownCountry: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: 40,
    paddingHorizontal: 8,
  },
  containerDropdownState: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: 40,
    paddingHorizontal: 8,
  },
  txtState: {
    fontSize: 12,
    marginStart:50,
    marginTop:10,
    fontFamily: Fonts.medium,
  },
  containerDropdownCity: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: 40,
    paddingHorizontal: 8,
  },
  txtCity: {
    fontSize: 12,
    marginStart:50,
    marginTop:10,
    fontFamily: Fonts.medium,
  },
  containerDropdownRegion: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: 'center',
    marginHorizontal: 40,
    paddingHorizontal: 8,
  },
  txtRegion: {
    fontSize: 12,
    marginStart:50,
    marginTop:10,
    fontFamily: Fonts.medium,
  },
  sendOtpContainer: {
    marginStart:50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageProceed: {
    width: 120,
    height: 120,
    marginEnd: 10,

  },
  imageWatermarks: {
    marginTop: 40,
    top: -80,
    alignSelf: 'center',
  },
});
