import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import { CommonHeader } from "../components/common/commonheader";
import { Dropdown } from "react-native-element-dropdown";
import { Dropdowns } from "../components/common/dropdown";
import { Images } from "../assets/images";
import { COLORS } from "../theme/colos";
import { Buttons } from "../components/common/button";

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

export const Location = () => {
  return (
    <View style={styles.mainContainer}>

      <View style={styles.container}>

        <CommonHeader title={'Location'} />

          <View style={styles.containerDropdown}>
            <Dropdowns image={Images.flags} height={300} data={data} label={'Country'} />
            <Dropdowns label={'State'} data={data} height={300} image={Images.flag}  />
            <Dropdowns label={'State'} data={data} height={300} image={Images.city}  />
            <Dropdowns label={'Region'} data={data} height={300} image={Images.region}  />
          </View>

          <View style={styles.button}>
            <Buttons buttonLabel={'Update Location'} />
          </View>

        <Image style={styles.imageWatermarks} source={Images.watermarks} />

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    marginTop: 30,
  },
  containerDropdown: {
    marginTop: 20,
  },
  button: {
    marginTop: 40,
  },
  imageWatermarks: {
    marginTop: 70,
    alignSelf: 'center',
  },

});
