import { View, Text, ScrollView } from "react-native";
import React from "react";
import Post from "./Post";
import { post } from "../dummydata";

const Posts = () => {
  return (
    <View style={{marginTop:10, alignSelf:"stretch",display:"flex"}}>
      <ScrollView>
        {post.map((post, index) => (
          <Post key={index} username={post.username} profilephoto={post.profilephoto} image={post.postimg} like={post.likes} dis={post.dis} comments={post.comment}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default Posts;
