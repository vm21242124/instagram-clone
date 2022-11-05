import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './Pages/HomeScreen';

export default function App() {
  return (
    

    <SafeAreaProvider>
      <HomeScreen/>
      
    </SafeAreaProvider>
    

    

  );
}
