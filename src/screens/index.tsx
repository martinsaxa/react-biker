import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined
    Network: {
        id: string
    }
}

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type NetworkProps = NativeStackScreenProps<RootStackParamList, 'Network'>
export const Stack = createNativeStackNavigator<RootStackParamList>()