import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Station } from "../types/api/network";

type RootStackParamList = {
    Home: undefined
    Network: {
        id: string
    },
    Station: {
        station: Station
    },
}

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type NetworkProps = NativeStackScreenProps<RootStackParamList, 'Network'>
export type StationProps = NativeStackScreenProps<RootStackParamList, 'Station'>
export const Stack = createNativeStackNavigator<RootStackParamList>()