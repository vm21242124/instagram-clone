import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import profile from "../assets/profile.png";
import back from "../assets/back.png";
import { Formik } from "formik";
import axios from "axios";
const Newpost = () => {
  const user = useSelector((state) => state.user[0]);
  const [loading,setLoading]=useState(false)
  return (
    <View style={style.safeview}>
      <View style={style.header}>
        <Image style={style.back} source={back} />
        <Text style={{ color: "white", fontWeight: "700", fontSize: 15 }}>
          Back
        </Text>
      </View>
      <View style={style.profile}>
        <TouchableOpacity>
          <Image
            style={style.profileimg}
            source={user?.profilepic ? { uri: user.profilepic } : profile}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 15 }}>
            {user.name}
          </Text>
        </TouchableOpacity>
      </View>
      <Formik
        initialValues={{ dis: "", imgurl: "" }}
        onSubmit={(values) => {
          // console.log(values.dis, values.imgurl);
          setLoading(true)
          axios.post(
            "https://instagram-clone-server-side.onrender.com/post/newpost",
            { userId: user._id, desc: values.dis, image: values.imgurl }
          ).then((res)=>{
            setLoading(false)
            alert("post successfull")

          }).catch((e)=>{
            setLoading(false)
            alert(e)
          })
        }}
      >
        {({ handleChange, handleSubmit, handleBlur, values }) => (
          <View style={style.postform}>
            <TextInput
              name="dis"
              style={style.inp}
              placeholder="Enter some dis..."
              placeholderTextColor={"white"}
              onChangeText={handleChange("dis")}
              onBlur={handleBlur("dis")}
              value={values.dis}
            />
            <TextInput
              name="imgurl"
              style={style.inp}
              placeholder="add image link"
              placeholderTextColor={"white"}
              onChangeText={handleChange("imgurl")}
              onBlur={handleBlur("imgurl")}
              value={values.imgurl}
            />
            <View style={style.preview}>
              {values.imgurl ? (
                <Image style={style.img} source={{ uri: values.imgurl }} />
              ) : (
                <Text style={style.tex}>No Image Found 📪</Text>
              )}
            </View>

            <TouchableOpacity>
              <Button disabled={loading} onPress={handleSubmit} title={loading?"posting...":"Post"} />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Newpost;
const style = StyleSheet.create({
  tex: {
    color: "white",
    fontSize: 15,
  },
  img: { width: "90%", height: "90%", resizeMode: "contain" },
  back: {
    marginLeft: 10,
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  preview: {
    display: "flex",
    width: "100%",
    height: "60%",
    backgroundColor: "gray",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  postform: {
    display: "flex",
    alignItems: "stretch",
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
