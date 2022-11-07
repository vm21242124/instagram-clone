import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import heart from "../assets/heart.png";
import liking from "../assets/liking.png";
import comment from "../assets/comment.png";
import send from "../assets/send.png";

const Post = ({ username, profilephoto, image, like, dis, comments }) => {
  const [liked, setLiked] = useState(false);
  const totallikes = like;

  const handleClick = () => {
    if (liked) {
      like - 1;
    } else {
      like + 1;
    }
    setLiked(!liked);
  };

  return (
    <View style={style.post}>
      {/* this post Header */}
      <View style={style.postheader}>
        <View style={style.user}>
          <Image style={style.profilephoto} source={{ uri: profilephoto }} />
          <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>
            {username}
          </Text>
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
        <TouchableOpacity onPress={handleClick}>
          {liked ? (
            <Image style={style.footericon} source={liking} />
          ) : (
            <Image style={style.footericon} source={heart} />
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={style.footericon} source={comment} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={style.footericon} source={send} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ color: "gray", marginLeft: 5 }}>likes {like}</Text>
        <View style={style.dis}>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 15 }}>
            {" "}
            {username}
          </Text>
          <Text style={{ color: "gray", fontWeight: "600", fontSize: 15 }}>
            {" "}
            {dis}
          </Text>
        </View>
        {comments.map((c, index) => (
          <View style={{ display: "flex", flexDirection: "row"  ,marginBottom:15} } key={index}>
            <Text
              style={{
                color: "white",
                fontWeight: "400",
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              {c.commentuser}
            </Text>
            <Text style={{ color: "gray", fontWeight: "400", marginLeft: 5 }}>
              {c.commentmessage.length < 10
                ? c.commentmessage
                : c.commentmessage.slice(0, 20) + "..."}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Post;

const style = StyleSheet.create({
  post: {
    marginBottom: 20,
    borderBottomColor: "white",

    borderWidth: 0.5,
  },
  dis: {
    display: "flex",
    flexDirection: "row",
  },
  postfooter: {
    display: "flex",
    flexDirection: "row",
  },
  footericon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    margin: 5,
    marginBottom: 10,
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
