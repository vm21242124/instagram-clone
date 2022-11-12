import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import axios from "react-native-axios";
import * as Yup from "yup";
import instagramlogo from "../assets/instagramlogo.png";

const SignUp = ({ navigation }) => {
  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    username: Yup.string()
      .min(3, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    phone: Yup.string()
      .min(10, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const [loading, setLoading] = useState(false);
  
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
          validationSchema={signupSchema}
          onSubmit={(values) => {
            setLoading(true);

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
                alert("registration success");
                navigation.navigate("login");
                // console.log(res.status);
                setLoading(false);
              })
              .catch((error) => {
                if (error.response.status === 403) {
                  alert("you have already registered login now");
                  navigation.navigate("login")
                }
                console.log(error);
                setLoading(false);
              });
          }}
        >
          {({ handleChange, handleSubmit, handleBlur, values ,errors,touched }) => (
            <View style={style.loginform}>
              <TextInput name="name"
                style={style.inp}
                placeholder="Name"
                placeholderTextColor={"white"}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <Text style={{color:"white",fontSize:10}}>{errors.name}</Text>
              ) : null}
              <TextInput
              name="email"
              type="email"
                style={style.inp}
                placeholder="email"
                placeholderTextColor={"white"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <Text style={{color:"white",fontSize:10}}>{errors.email}</Text>
              ) : null}
              <TextInput
              name="username"
                style={style.inp}
                placeholder="username"
                placeholderTextColor={"white"}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              {errors.username && touched.username ? (
                <Text style={{color:"white",fontSize:10}}>{errors.username}</Text>
              ) : null}
              <TextInput
              name="phone"
                style={style.inp}
                placeholder="phone"
                placeholderTextColor={"white"}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                keyboardType="number-pad"
              />
              {errors.phone && touched.phone ? (
                <Text style={{color:"white",fontSize:10}}>{errors.phone}</Text>
              ) : null}

              <TextInput
              name="password"
                style={style.inp}
                placeholder="Password"
                placeholderTextColor={"white"}
                password={true}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {errors.password && touched.password ? (
                <Text style={{color:"white",fontSize:10}}>{errors.password}</Text>
              ) : null}
              <TouchableOpacity>
                <Button
                  disabled={loading}
                  onPress={handleSubmit}
                  title={loading ? "loading..." : "signUp"}
                />
              </TouchableOpacity>
              <View style={style.tag}>
                <Text style={{ color: "white" }}>
                  Already Have an account ?{" "}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("login")}
                  >
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
