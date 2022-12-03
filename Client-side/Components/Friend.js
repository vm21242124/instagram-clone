import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'


const Friend = ({usename,profilephoto}) => {
  return (
    <View style={style.card}>
      <Image  style={style.profilephoto} source={{uri:profilephoto}}/>
      <Text style={{color:"white"}}>{usename}</Text>
      <Button title='follow'/>
    </View>
  )
}

export default Friend

const style=StyleSheet.create({
    card:{
        display:"flex",alignItems:'center',flexDirection:'row',
        backgroundColor:"black"
        ,width:"100%",justifyContent:'space-around'
        ,marginBottom:10
    },
    profilephoto:{
        width:70,resizeMode:'contain',height:70
        ,borderRadius:50,borderColor:"red",borderWidth:1
    }
})