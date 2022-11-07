import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import React from "react";
import { storyuser } from "../dummydata";
import Story from "./Story";

const Stories = () => {
  return (
    <View style={story.container}>
      <Text style={story.head}>Stories</Text>

      <ScrollView horizontal={true}>
        <View style={story.stories}>
          {storyuser.map((s, index) => (
            <Story key={index} name={s.username} image={s.profilephoto} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const story = StyleSheet.create({
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
