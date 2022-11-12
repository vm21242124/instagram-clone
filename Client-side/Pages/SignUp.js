import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import axios from "react-native-axios";
import instagramlogo from "../assets/instagramlogo.png";

const SignUp = () => {
  return (
    <View style={style.safeview}>
      <View style={style.container}>
        <Image style={style.logo} source={instagramlogo} />
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            phone: "",
            username: "",
          }}
          onSubmit={(values) => {
            // console.log(
            //   values.email,
            //   values.name,
            //   values.phone,
            //   values.password,
            //   values.username
            // );
            axios
              .post(
                "https://instagram-clone-server-side.onrender.com/auth/register",
                {
                  email: values.email,
                  name: values.name,
                  phone: values.phone,
                  password: values.password,
                  username: values.username,
                }
              )
              .then((res) => {
                console.log(res);
                // console.log(res.data);
              })

            // email:values.email,
            // name:values.name,
            // phone:values.phone,
            // password:values.password,
            // username:values.username
          }}
        >
          {({ handleChange, handleSubmit, handleBlur, values }) => (
            <View style={style.loginform}>
              <TextInput
                style={style.inp}
                placeholder="Name"
                placeholderTextColor={"white"}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <TextInput
                style={style.inp}
                placeholder="email"
                placeholderTextColor={"white"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <TextInput
                style={style.inp}
                placeholder="username"
                placeholderTextColor={"white"}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              <TextInput
                style={style.inp}
                placeholder="phone"
                placeholderTextColor={"white"}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                keyboardType="number-pad"
              />

              <TextInput
                style={style.inp}
                placeholder="Password"
                placeholderTextColor={"white"}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <TouchableOpacity>
                <Button onPress={handleSubmit} title="Signup" />
              </TouchableOpacity>
              <View style={style.tag}>
                <Text style={{ color: "white" }}>
                  Already Have an account ?{" "}
                  <TouchableOpacity>
                    <Text style={{ color: "blue", fontWeight: "600" }}>
                      signIn
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignUp;
const style = StyleSheet.create({
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

  safeview: {
    color: "white",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 36 : 0,
    alignItems: "center",
  },
});
