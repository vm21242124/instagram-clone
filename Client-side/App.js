import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Tabs from "./Components/Tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./Pages/SignUp";
import LoginScreen from "./Pages/LoginScreen";
import { mystore } from "./Redux/Store/Store";
const stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={mystore}>
        <NavigationContainer>
          <stack.Navigator
            initialRouteName="login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <stack.Screen name="home" component={Tabs} />
            <stack.Screen name="login" component={LoginScreen} />
            <stack.Screen name="signup" component={SignUp} />
          </stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
