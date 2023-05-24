import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined
    LocationDetails: {
        id: string
    }
}

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type LocationDetailsProps = NativeStackScreenProps<RootStackParamList, 'LocationDetails'>
export const Stack = createNativeStackNavigator<RootStackParamList>()