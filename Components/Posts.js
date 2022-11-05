import { View, Text, ScrollView } from "react-native";
import React from "react";
import Post from "./Post";
import { post } from "../dummydata";

const Posts = () => {
  return (
    <View style={{marginTop:10, alignSelf:"stretch"}}>
      <ScrollView>
        {post.map((post) => (
          <Post username={post.username} profilephoto={post.profilephoto} image={post.postimg} like={post.likes}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default Posts;
