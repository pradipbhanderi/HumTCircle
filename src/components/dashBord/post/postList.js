import React from "react";
import { FlatList, View } from "react-native";
import { PostCell } from "./postCell";
import { MyQueriesCell } from "../myQueriesCell";

export const PostList = () => {
  return (
    <View>
      <FlatList data={[
        {key: 'Android'},
        {key: 'iOS'},
        {key: 'Java'},
      ]} renderItem={({item, index}) => (
        <PostCell />
      )}
      />
    </View>
  );
};
