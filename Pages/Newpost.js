import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Newpost = () => {
  return (
    <View style={style.safeview}>
      <Text style={{color:"white"}}>Newpost</Text>
    </View>
  )
}

export default Newpost
const style = StyleSheet.create({
  safeview: {
    backgroundColor: "black",
    color: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 36 : 0,
    alignItems: "center",
  },
});