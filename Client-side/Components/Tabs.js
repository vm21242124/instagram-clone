import React from "react";
import HomeScreen from "../Pages/HomeScreen";
import Notify from "../Pages/Notify";
import ReelsScreen from "../Pages/ReelsScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image,View } from "react-native";
import home from "../assets/home.png";
import add from "../assets/add.png";
import heart from "../assets/heart.png";
import short from "../assets/short.png";
import Profilepage from "../Pages/Profilepage";
import Newpost from "../Pages/Newpost";

const Tabs = () => {
  const tab = createBottomTabNavigator();
  return (
    <tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: "black",
        tabBarInactiveBackgroundColor: "black",
        headerShown: false,
        showLabel: false,
        
      }}
      initialRouteName="login"
    >
      
       
      <tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={home}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
      
      <tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={short}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
      <tab.Screen
        name="Newpost"
        component={Newpost}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={add}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
      <tab.Screen
        name="Notification"
        component={Notify}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={heart}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
      <tab.Screen
        name="profile"
        component={Profilepage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={{uri:"https://imgs.search.brave.com/uJ2GZ1Hm8hjZbeNACW2N-ZHtJ2NNHhp_5qxLkvj77F8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC45/UVFWQXhmNzFGVllp/b1BuUmcxaHJRSGFF/OCZwaWQ9QXBp"}}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                  borderRadius:50,
                  // tintColor: focused ? "#e32f45" : "#748c94",
                  borderWidth:1,
                  borderColor: focused?"white":"red"
                }}
              />
            </View>
          ),
        }}
      />
    </tab.Navigator>
  );
};

export default Tabs;

