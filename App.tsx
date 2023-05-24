import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/screens';
import HomeScreen from './src/screens/HomeScreen';
import LocationDetailsScreen from './src/screens/LocationDetailsScreen';
import { PaperProvider, useTheme } from 'react-native-paper';
import { CombinedDefaultTheme } from './src/lib/theme';
import { SWRConfig } from 'swr/_internal';
import { SWRoptions } from './src/lib/api';

export default function App() {

  return (
    <SWRConfig value={SWRoptions}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <PaperProvider theme={CombinedDefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='LocationDetails' component={LocationDetailsScreen} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </SWRConfig>
  );
}
