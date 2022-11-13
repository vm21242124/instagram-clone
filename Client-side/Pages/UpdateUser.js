import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import back from "../assets/back.png";
import { set_user, update_user } from "../Redux/Actions/Actions";

const UpdateUser = ({ navigation }) => {
  const user = useSelector((state) => state.user[0]);
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  return (
    <View style={style.safeview}>
      <TouchableOpacity
        style={style.backc}
        onPress={() => navigation.navigate("home")}
      >
        <Image style={style.back} source={back} />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
            marginLeft: 10,
          }}
        >
          Back
        </Text>
      </TouchableOpacity>

      <View style={style.container}>
        <Formik
          initialValues={{
            name: "",
            username: "",
            profilepic: "",
            coverpic: "",
            bio: "",
          }}
          onSubmit={(values) => {
            setLoading(true);
            let Name = values.name;
            let bio = values.bio;
            let username = values.username;
            let coverpic = values.coverpic;
            let profilepic = values.profilepic;
            {
              Name == "" ? (Name = user.name) : (Name = Name);
            }
            {
              bio == "" ? (bio = user.bio) : (bio = bio);
            }
            {
              username == ""
                ? (username = user.username)
                : (username = username);
            }
            {
              coverpic == ""
                ? (coverpic = user.coverPic)
                : (coverpic = coverpic);
            }
            {
              profilepic == ""
                ? (profilepic = user.profilepic)
                : (profilepic = profilepic);
            }
            
            axios
              .put(
                `https://instagram-clone-server-side.onrender.com/user/${user._id}`,
                {
                  currentUserId: user._id,
                  name: Name,
                  username: username,
                  bio: bio,
                  coverPic: coverpic,
                  profilepic: profilepic,
                }
              )
              .then((res) => {
                // setLoading(false);
                setLoading(false);
                alert("update success you have to login again to view the changes");

                navigation.navigate("login");
                console.log(res.data);
             
              })
              .catch((e) => {
                // setLoading(false);
                setLoading(false);
                console.log(e);
              });
            
          }}
          
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <View style={style.loginform}>
              <TextInput
                name="name"
                style={style.inp}
                placeholder="Name"
                placeholderTextColor={"white"}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <TextInput
                name="username"
                style={style.inp}
                placeholder="username"
                placeholderTextColor={"white"}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />

              <TextInput
                name="bio"
                style={style.inp}
                placeholder="bio"
                placeholderTextColor={"white"}
                onChangeText={handleChange("bio")}
                onBlur={handleBlur("bio")}
                value={values.bio}
              />

              <TextInput
                name="profilepic"
                style={style.inp}
                placeholder="profilepic"
                placeholderTextColor={"white"}
                onChangeText={handleChange("profilepic")}
                onBlur={handleBlur("profilepic")}
                value={values.profilepic}
              />
              <TextInput
                name="coverpic"
                style={style.inp}
                placeholder="coverpic"
                placeholderTextColor={"white"}
                onChangeText={handleChange("coverpic")}
                onBlur={handleBlur("coverpic")}
                value={values.coverpic}
              />
              <TouchableOpacity>
                <Button
                  disabled={loading}
                  onPress={handleSubmit}
                  title={loading ? "updating..." : "update info"}
                />
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default UpdateUser;
const style = StyleSheet.create({
  safeview: {
    backgroundColor: "black",
    color: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 36 : 0,
    // alignItems: "center",
  },
  back: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  backc: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  tag: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  inp: {
    backgroundColor: "gray",
    fontWeight: "200",
    color: "white",
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 10,
  },
  logo: {
    height: 100,
    width: 170,
    resizeMode: "contain",
    marginBottom: 20,
    // ,backgroundColor:"blue"
  },
  container: {
    display: "flex",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    flex: 1,
  },
  loginform: {
    display: "flex",
    width: "90%",

    // backgroundColor:"red"
  },
});
