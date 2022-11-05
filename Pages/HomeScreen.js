import { View, Text, SafeAreaView,Platform, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from '../Components/Header'
import React from "react";
import Stories from "../Components/Stories";
import Posts from "../Components/Posts";


const HomeScreen = () => {
  return (
    <View style={style.safeview}>
        <Header/>
        <Stories/>
        <Posts/>
    </View>
  );
};

const style = StyleSheet.create({
  safeview: {
    backgroundColor:"black",
     color:"white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 36 : 0,
    alignItems:"center"
  },
});

export default HomeScreen;
