import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FooteBar = () => {
  return (
    <View style={style.footer}>
      <Text style={{color:"white"}}>FooteBar</Text>
    </View>
  )
}

export default FooteBar;
const style=StyleSheet.create({
    footer:{
        display:"flex",
       width:200,
        height:100,
        backgroundColor:"white"
        ,
        flex:1,
        
    }
})