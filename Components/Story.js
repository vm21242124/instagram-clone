import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Story = ({ name, image }) => {
  return (
    <View style={story.div}>
      <TouchableOpacity>

      <Image style={story.img} source={{ uri: image }} />
      </TouchableOpacity>

      <Text style={{ color: "white" }}>{name}</Text>
    </View>
  );
};

export default Story;
const story = StyleSheet.create({
  div: {
    display: "flex",
    alignItems: "center",
    margin:5
  },
  img: {
    width:60, 
    height: 60,
    resizeMode:"contain",
    borderRadius:60,
    borderWidth:2,
    borderColor:"green"
  },
});
