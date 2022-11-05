import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import heart from "../assets/heart.png";
import comment from "../assets/comment.png";
import send from "../assets/send.png";

const Post = ({ username, profilephoto, image, like}) => {
  return (
    <View>
      {/* this post Header */}
      <View style={style.postheader}>
        <View style={style.user}>
          <Image style={style.profilephoto} source={{ uri: profilephoto }} />
          <Text style={{ color: "white" ,fontWeight:"600" ,fontSize:15 }}>{username}</Text>
        </View>
        <Text style={{ color: "white", fontSize: 20, marginRight: 10 }}>
          ---
        </Text>
      </View>
      {/* this is post middle */}
      <View style={style.postimg}>
        <Image style={style.img} source={{ uri: image }} />
      </View>
      <View style={style.postfooter}>
        <TouchableOpacity>
          <Image style={style.footericon} source={heart} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={style.footericon} source={comment} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={style.footericon} source={send} />
        </TouchableOpacity>
      </View>
      <Text style={{color:"white" ,fontWeight:"600" ,fontSize:15}}> {username}</Text>
      
    </View>
  );
};

export default Post;
const style = StyleSheet.create({
  postfooter: {
    display: "flex",
    flexDirection: "row",
  },
  footericon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    margin: 5,
    marginBottom:10
  },
  img: {
    width: 350,
    height: 400,

    resizeMode: "contain",
  },
  postimg: {
    alignItems: "center",

    marginBottom: 10,
  },
  postheader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  profilephoto: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "green",
    marginRight: 10,
  },
});
