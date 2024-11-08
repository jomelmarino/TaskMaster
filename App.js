import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen'; // Import the new HomeScreen component

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }} // Hides header
          
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false,    // Hides header
                    gestureEnabled: true,   // Enable swipe gesture to go back
           }}

        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false,       // Hides header
                      gestureEnabled: true,   // Enable swipe gesture to go back
           }}

        />

      

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
