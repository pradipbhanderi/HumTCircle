import React from "react";
import { ScrollView, StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { MyQueriesCell } from "./myQueriesCell";
import { Fonts } from "../../theme/fonts";
import { COLORS } from "../../theme/colos";
import { useNavigation } from "@react-navigation/native";

export const MyQueries = ({ IsMyQueries }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>

      {
        IsMyQueries ?
          <View style={styles.queriesContainer}>
            <Text style={styles.txtQueries}>My Queries</Text>
            <Pressable onPress={() => {
              navigation.navigate('myQueriesScreen') }}>
              <Text style={styles.txtView}>View all</Text>
            </Pressable>

          </View>
          :
          <View style={styles.queriesContainer}>
            <Text style={styles.txtQueries}>My Queries</Text>
            <Pressable onPress={() => {
              navigation.navigate('myQueriesScreen') }}>
              <Text style={styles.txtView}>View all</Text>
            </Pressable>

          </View>

      }



      <View>
        {
          IsMyQueries ?
            <ScrollView>
              <FlatList
                ListFooterComponent={() => <View />}
                data={[
                  { key: "Android" },
                  { key: "iOS" },
                  { key: "Java" },
                ]}
                horizontal
                renderItem={({ item, index }) => (
                  <MyQueriesCell />
                )}
              />
            </ScrollView>
            :
            <View>

              <FlatList
                ListFooterComponent={() => <View />}
                data={[
                  { key: "Android" },
                  { key: "iOS" },
                  { key: "Java" },
                ]}
                renderItem={({ item, index }) => (
                  <MyQueriesCell />
                )}
              />
            </View>
        }


      </View>

    </View>

  );
};

const styles = StyleSheet.create({

  mainContainer: {
    flexDirection: "column",
    marginTop: 15,
  },
  queriesContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  txtQueries: {
    fontSize: 14,
    fontFamily: Fonts.bold,
    color: COLORS.black,
    marginStart: 2,
    flex: 1,
  },
  txtView: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: COLORS.theme_color,
  },

});
