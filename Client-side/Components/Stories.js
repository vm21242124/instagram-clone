import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import add from "../assets/add.png";

import React from "react";
import { storyuser } from "../dummydata";
import Story from "./Story";
import { useSelector } from "react-redux";
import profile from '../assets/profile.png'

const Stories = () => {
  const user=useSelector((state)=>state.user[0])
 
  return (
    <View style={story.container}>
      <Text style={story.head}>Stories</Text>

      <ScrollView horizontal={true}>
        <View style={story.stories}>
          <View style={story.div}>
            <TouchableOpacity>
              <Image
                style={story.img}
                source={user?.profilepic?{uri:user.profilepic}:profile}
              />
            </TouchableOpacity>
            <Image style={story.plus} source={add} />

            <Text style={{ color: "white" }}>{user?.username}</Text>
          </View>
          {storyuser.map((s, index) => (
            <Story key={index} name={s.username} image={s.profilephoto} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const story = StyleSheet.create({
  plus: {
    width: 20,
    height: 20,
    position: "absolute",
    flex: 1,
    backgroundColor: "black",
    top: 40,
    left: 45,
  },
  div: {
    display: "flex",
    alignItems: "center",
    margin: 5,
    marginRight: 20,
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "green",
  },
  container: {
    display: "flex",
    height: 130,
    borderWidth: 0.5,
    borderBottomColor: "white",
  },
  head: {
    color: "white",
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 10,
  },
  stories: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
  },
});

export default Stories;
