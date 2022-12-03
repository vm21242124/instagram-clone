import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { storyuser } from "../dummydata.js";
import Friend from "../Components/Friend";
const ReelsScreen = () => {
  return (
    <View style={style.safeview}>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "700",
          marginTop: 20,
          marginLeft: 15,
        }}
      >
        Add Friends
      </Text>
      <View style={style.maincard}>
        <ScrollView>
          <View style={style.twocard}>
            
            {storyuser.map((user, index) => (
              <Friend
                key={index}
                usename={user.username}
                profilephoto={user.profilephoto}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ReelsScreen;
const style = StyleSheet.create({
  safeview: {
    backgroundColor: "black",
    color: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 36 : 0,
  },
  maincard: {
    justifyContent: "center",
    backgroundColor: "red",
    alignContent: "stretch",

    overflow: "scroll",
    height: "auto",
  },
  twocard: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
