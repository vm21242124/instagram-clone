import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import {useDispatch} from 'react-redux'
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import instagramlogo from "../assets/instagramlogo.png";
import axios from "axios";
import { set_user } from "../Redux/Actions/Actions";

const LoginScreen = ({ navigation }) => {
  const dispatch=useDispatch()
  

  const signupSchema = Yup.object().shape({
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
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            // console.log(values.email, values.password)
            setLoading(true);
            axios
              .post(
                "https://instagram-clone-server-side.onrender.com/auth/login",
                { email: values.email, password: values.password }
              )
              .then((res) => {
                setLoading(false);
                alert("login success");
                
                navigation.navigate("home");
                // console.log(res.data);
                dispatch(set_user(res.data))
              })
              .catch((e) => {
                setLoading(false);
                console.log(e);
              });
          }}
          validationSchema={signupSchema}
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
                name="email"
                type="email"
                style={style.inp}
                placeholder="Phone number,email or username"
                placeholderTextColor={"white"}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <Text style={{ color: "white", fontSize: 10 }}>
                  {errors.email}
                </Text>
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
                <Text style={{ color: "white", fontSize: 10 }}>
                  {errors.password}
                </Text>
              ) : null}
              <TouchableOpacity>
                <Button disabled={loading} onPress={handleSubmit} title={loading?"loading":"Login"} />
              </TouchableOpacity>
              <View style={style.tag}>
                <Text style={{ color: "white" }}>
                  Don't have an account ?{" "}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("signup")}
                  >
                    <Text style={{ color: "blue", fontWeight: "600" }}>
                      SignUp
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

export default LoginScreen;

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
