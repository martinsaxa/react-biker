import { NavigationContainer } from '@react-navigation/native';
import { Button, PaperProvider } from 'react-native-paper';
import { CombinedDefaultTheme } from './src/lib/theme';
import { SWRConfig } from 'swr/_internal';
import { Ionicons } from '@expo/vector-icons';
import { SWRoptions } from './src/lib/api';
import { Stack } from './src/screens';
import HomeScreen from './src/screens/HomeScreen';
import NetworkScreen from './src/screens/NetworkScreen';
import StationScreen from './src/screens/StationScreen';
import AboutScreen from './src/screens/AboutScreen';

export default function App() {

  return (
    <SWRConfig value={SWRoptions}>
      <NavigationContainer theme={CombinedDefaultTheme}>
        <PaperProvider theme={CombinedDefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={({ navigation }) => ({
              headerRight: () => <Ionicons name="ios-information-circle-outline" size={24} color={CombinedDefaultTheme.colors.onSurface} onPress={() => navigation.navigate('About') } />
            })} />
            <Stack.Screen name='Network' component={NetworkScreen} />
            <Stack.Screen name='Station' component={StationScreen} options={({ route }) => ({
              presentation: 'modal',
              title: route.params.station.name,
            })} />
            <Stack.Screen name='About' component={AboutScreen} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </SWRConfig>
  );
}
