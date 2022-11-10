import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";

const Profilepage = () => {
  return (
    <View style={style.safeview}>
      <View style={style.cover}>
        <Image
          style={style.coverimg}
          source={{
            uri: "https://imgs.search.brave.com/uJ2GZ1Hm8hjZbeNACW2N-ZHtJ2NNHhp_5qxLkvj77F8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/UVFWQXhmNzFGVllp/b1BuUmcxaHJRSGFF/OCZwaWQ9QXBp",
          }}
        />
        <Image
          style={style.profileimg}
          source={{
            uri: "https://imgs.search.brave.com/uJ2GZ1Hm8hjZbeNACW2N-ZHtJ2NNHhp_5qxLkvj77F8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/UVFWQXhmNzFGVllp/b1BuUmcxaHJRSGFF/OCZwaWQ9QXBp",
          }}
        />
      </View>
      <View style={style.userinfo}>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          vm2124
        </Text>
        <Text style={{ color: "white", fontWeight: "200", fontSize: 15 }}>
          every thing will be possible when you are tying from bottom
        </Text>
      </View>
      <View style={style.follow}>
        <View style={{alignItems:"center"}}>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 20 ,marginBottom:10 }}>
            Total Post
          </Text>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 15 }}>
            0
          </Text>
        </View>
        <View style={{alignItems:"center"}}>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 20  ,marginBottom:10 }}>
            Follower
          </Text>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 15 }}>
            550
          </Text>
        </View>
        <View style={{alignItems:"center"}}>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 20  ,marginBottom:10}}>
            Following
          </Text>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 15 }}>
            50
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Button
          title="edit profile"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </TouchableOpacity>
      
    </View>
  );
};

export default Profilepage;
const style = StyleSheet.create({
  follow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
  },
  userinfo: {
    marginTop: 50,
    marginLeft: 40,
  },
  profileimg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "red",
    position: "absolute",
    top: 100,
    left: 20,
    marginBottom: 10,
  },
  cover: {
    height: 150,
    width: "100%",
    backgroundColor: "white",
  },
  coverimg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  safeview: {
    backgroundColor: "black",
    color: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 36 : 0,
    // alignItems: "center",
  },
});
