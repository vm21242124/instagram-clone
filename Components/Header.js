import {
  View,
  Text,
  style,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import instagramlogo from "../assets/instagramlogo.png";
import add from "../assets/add.png";
import heart from "../assets/heart.png";
import send from "../assets/send.png";
const Header = () => {
  return (
    <View style={Nav.main}>
      <View style={Nav.container}>
        <View>
          <TouchableOpacity>
            <Image style={Nav.logo} source={instagramlogo} />
          </TouchableOpacity>
        </View>

        <View style={Nav.icon_container}>
          <TouchableOpacity>
            <Image style={Nav.icon} source={add} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={Nav.icon} source={heart} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={Nav.icon} source={send} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
const Nav = StyleSheet.create({
  main: {
    alignSelf: "stretch",
    // backgroundColor:"blue",
    // width:400
    //   display:"flex",
    // flexDirection:"row"
  },
  container: {
    // alignSelf:"stretch",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    marginLeft:10,
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icon_container: {
    flexDirection: "row",
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    marginRight:5
  },
});
