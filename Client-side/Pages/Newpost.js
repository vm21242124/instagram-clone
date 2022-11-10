import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import gallary from "../assets/gallary.png";
import camera from "../assets/camera.png";
import placeholder from "../assets/placeholder.png";
import video from "../assets/video.png";

const Newpost = () => {
  return (
    <View style={style.safeview}>
      <Text style={{ color: "white" }}>Newpost</Text>
      <View style={style.profile}>
        <TouchableOpacity>
          <Image
            style={style.profileimg}
            source={{
              uri: "https://imgs.search.brave.com/uJ2GZ1Hm8hjZbeNACW2N-ZHtJ2NNHhp_5qxLkvj77F8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/UVFWQXhmNzFGVllp/b1BuUmcxaHJRSGFF/OCZwaWQ9QXBp",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
            vm2124
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.box}>
        <TextInput
          placeholder="what'in your mind?"
          numberOfLines={4}
          style={style.dis}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: "white", margin: 10, fontSize: 15 }}>
          Add More
        </Text>
        <View style={style.icons}>
          <TouchableOpacity>
            <Image style={style.icon} source={gallary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={style.icon} source={camera} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={style.icon} source={placeholder} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                tintColor: "#748c94",
                width: 30,
                height: 30,
                resizeMode: "contain",
              }}
              source={video}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Button
          title="post"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Newpost;
const style = StyleSheet.create({
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  dis: {
    backgroundColor: "gray",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    width: "90%",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  profileimg: {
    width: 50,
    resizeMode: "contain",
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  safeview: {
    backgroundColor: "black",
    color: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 36 : 0,
  },
});
