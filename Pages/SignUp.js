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
import instagramlogo from "../assets/instagramlogo.png";

const SignUp = () => {
  return (
    <View style={style.safeview}>
      <View style={style.container}>
        <Image style={style.logo} source={instagramlogo} />
        <Formik
          initialValues={{ email: "", password: "" ,Name:""}}
          onSubmit={(values) => console.log(values.email ,values.Name ,values.password)}
        >
          {({ handleChange, handleSubmit, handleBlur, values }) => (
            <View style={style.loginform}>
              <TextInput
                style={style.inp}
                placeholder="Phone number,email or username"
                placeholderTextColor={"white"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <TextInput
                style={style.inp}
                placeholder="Name"
                placeholderTextColor={"white"}
                onChangeText={handleChange("Name")}
                onBlur={handleBlur("Name")}
                value={values.Name}
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
                <Button onPress={handleSubmit} title="Login" />
              </TouchableOpacity>
              <View style={style.tag}>
                <Text style={{ color: "white" }}>
                  Already Have an account ?{" "}
                  <TouchableOpacity>
                    <Text style={{ color: "blue", fontWeight: "600" }}>
                      SignIn
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
