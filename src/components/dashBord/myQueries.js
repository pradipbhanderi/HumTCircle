import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import { MyQueriesCell } from "./myQueriesCell";
import { Fonts } from "../../theme/fonts";
import { COLORS } from "../../theme/colos";

export const MyQueries = () => {
  return(
    <View style={styles.mainContainer}>

      <View style={styles.queriesContainer}>
        <Text style={styles.txtQueries}>My Queries</Text>
        <Text style={styles.txtView}>View all</Text>
      </View>

      <View>
        <ScrollView>

          <FlatList
            ListFooterComponent={() => <View />}
            data={[
              {key: 'Android'},
              {key: 'iOS'},
              {key: 'Java'},
            ]}
            horizontal
            renderItem={({item, index}) => (
              <MyQueriesCell />
            )}
          />

        </ScrollView>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({

  mainContainer:{
    flexDirection: 'column',
    marginTop: 15,
  },
  queriesContainer:{
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  txtQueries:{
    fontSize: 14,
    fontFamily: Fonts.bold,
    color: COLORS.black,
    marginStart: 2,
    flex: 1,
  },
  txtView:{
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: COLORS.theme_color,
  },

});
