import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";



const FooteBar = () => {


  return (
   
    <View style={style.footer}>
       
      <TouchableOpacity>
        <View>
          <Text>home</Text>
          <Image
            style={style.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1946/1946433.png",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
        <Text>search</Text>
          <Image
            style={style.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/8820/8820327.png",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
        <Text>reels</Text>
          <Image
            style={style.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/8359/8359686.png",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
        <Text>notify</Text>
          <Image
            style={style.icon}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1000/1000621.png",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
        <Text >profile</Text>
          <Image 
            style={style.icon}
            source={{
              uri: "https://imgs.search.brave.com/uJ2GZ1Hm8hjZbeNACW2N-ZHtJ2NNHhp_5qxLkvj77F8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/UVFWQXhmNzFGVllp/b1BuUmcxaHJRSGFF/OCZwaWQ9QXBp",
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FooteBar;
const style = StyleSheet.create({
  icon: {
   
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  footer: {
    alignItems:"center",
    height:50,
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
  },
});
