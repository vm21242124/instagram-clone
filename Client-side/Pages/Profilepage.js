import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import profile from "../assets/profile.png";

const Profilepage = ({ navigation }) => {
  const user = useSelector((state) => state.user[0]);

  return (
    <View style={style.safeview}>
      <View style={style.cover}>
        <Image
          style={style.coverimg}
          source={
            user?.coverPic
              ? {
                  uri: user.coverPic,
                }
              : {
                  uri: "https://imgs.search.brave.com/uJ2GZ1Hm8hjZbeNACW2N-ZHtJ2NNHhp_5qxLkvj77F8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/UVFWQXhmNzFGVllp/b1BuUmcxaHJRSGFF/OCZwaWQ9QXBp",
                }
          }
        />
        <Image
          style={style.profileimg}
          source={
            user?.profilepic
              ? {
                  uri: user.profilepic,
                }
              : profile
          }
        />
      </View>
      <View style={style.userinfo}>
        <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
          {user?.name}
        </Text>
        <Text style={{ color: "white", fontWeight: "200", fontSize: 15 }}>
          {user?.bio}
        </Text>
      </View>
      <View style={style.follow}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            Total Post
          </Text>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 15 }}>
            0
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            Follower
          </Text>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 15 }}>
          {user.followers.length}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            Following
          </Text>
          <Text style={{ color: "white", fontWeight: "400", fontSize: 15 }}>
            {user.followings.length}
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate("updateuser")}
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
