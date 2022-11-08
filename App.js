
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tabs from './Components/Tabs';


import LoginScreen from './Pages/LoginScreen'

export default function App() {
  const [isSignup,seIsSignup]=useState(false)
  return (
    

    <SafeAreaProvider>
    <NavigationContainer >
      {isSignup ?
      <Tabs/> :
      <LoginScreen/>
      
    }
    </NavigationContainer>
    
      
    </SafeAreaProvider>
    

    

  );
}
