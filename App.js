import { NativeBaseProvider } from "native-base";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
        <NativeBaseProvider>
          <AppNavigation />
        </NativeBaseProvider>
    </NavigationContainer>
  );
}
