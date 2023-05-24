import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/screens';
import HomeScreen from './src/screens/HomeScreen';
import LocationDetailsScreen from './src/screens/LocationDetailsScreen';
import { PaperProvider, useTheme } from 'react-native-paper';
import { CombinedDefaultTheme } from './src/lib/theme';

export default function App() {

  return (
    <NavigationContainer theme={CombinedDefaultTheme}>
      <PaperProvider theme={CombinedDefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='LocationDetails' component={LocationDetailsScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
