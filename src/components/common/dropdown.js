import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../../theme/colos";
import { Fonts } from "../../theme/fonts";
import { Dropdown } from "react-native-element-dropdown";


export const Dropdowns = ({label,height,data,image}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return(
    <View style={styles.mainContainer}>

      <View style={styles.containerDropdown}>

        <Image style={styles.imagePhone} source={image} />

        <View style={styles.container}>
          <Dropdown
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            maxHeight={height}
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

      </View>
      <View style={styles.containerLabel}>
        <Text style={styles.txtLabel}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    marginTop: 15,
  },
  containerDropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: 40,
    paddingHorizontal: 8,
  },
  imagePhone: {
    marginStart: 10,
    marginEnd: 10,
    height:15,
    width:15,
  },
  container: {
    flex: 1,
  },
  containerLabel: {
    backgroundColor: COLORS.white,
    height:20,
    top:-10,
    marginStart: 55,
    position:"absolute"
  },
  txtLabel: {
    fontSize: 12,
    fontFamily: Fonts.medium,
  },
});
