import React from "react";
import { Image, Text, TextInput, View, StyleSheet} from "react-native";
import { Images } from "../../assets/images";
import { COLORS } from "../../theme/colos";
import { Fonts } from "../../theme/fonts";

export const InputText = ({image,placeholder,keyboardType,maxLength,label}) => {
  return(
    <View>

      <View style={styles.inputTextContainer}>
        <Image style={styles.imagePhone} source={image} />
        <TextInput style={styles.inputText} placeholder={placeholder}
                   keyboardType={keyboardType} maxLength={maxLength}
        />
      </View>
      <View style={styles.containerPhone}>
        <Text style={styles.txtPhone}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputTextContainer: {
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    borderColor: COLORS.gray,
    marginHorizontal: 40,
  },
  imagePhone: {
    marginStart: 10,
  },
  inputText: {
    flex: 1,
    paddingHorizontal: 10,
    color: COLORS.black,
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
});
