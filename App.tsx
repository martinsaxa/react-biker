import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { CombinedDefaultTheme } from './src/lib/theme';
import { SWRConfig } from 'swr/_internal';
import { SWRoptions } from './src/lib/api';
import { Stack } from './src/screens';
import HomeScreen from './src/screens/HomeScreen';
import NetworkScreen from './src/screens/NetworkScreen';

export default function App() {

  return (
    <SWRConfig value={SWRoptions}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <PaperProvider theme={CombinedDefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Network' component={NetworkScreen} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </SWRConfig>
  );
}
