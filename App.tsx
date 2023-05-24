import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from './src/screens';
import HomeScreen from './src/screens/HomeScreen';
import LocationDetailsScreen from './src/screens/LocationDetailsScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='LocationDetails' component={LocationDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
