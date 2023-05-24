import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import { HomeProps } from "."
import NetworksList from "../components/NetworksList"

export default function HomeScreen({ navigation }: HomeProps) {

    const navigateToDetailsScreen = (id: string) => navigation.navigate('LocationDetails', {id})

    return (
        <View style={{ flex: 1 }}>
            <NetworksList onItemPress={navigateToDetailsScreen} />
        </View>
    )
}