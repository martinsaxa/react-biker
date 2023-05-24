import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined
    LocationDetails: undefined
}

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export const Stack = createNativeStackNavigator<RootStackParamList>()