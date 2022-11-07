
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tabs from './Components/Tabs';


import HomeScreen from './Pages/HomeScreen';

export default function App() {
  return (
    

    <SafeAreaProvider>
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
    
      
    </SafeAreaProvider>
    

    

  );
}
