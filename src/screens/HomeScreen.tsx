import { View } from "react-native"
import { ActivityIndicator, Text } from "react-native-paper"
import { HomeProps } from "."
import NetworksList from "../components/NetworksList"
import { sortNetworks } from "../lib/networks"
import { useNetworks } from "../hooks/api"
import { global } from "../lib/styles"

export default function HomeScreen({ navigation }: HomeProps) {
    const { data, isLoading } = useNetworks()

    const navigateToDetailsScreen = (id: string) => navigation.navigate('Network', {id})

    if (isLoading) {
        return (
            <View style={global.center}>
                <ActivityIndicator size='large' />
            </View>
        )
    }
    if (!data) {
        return (
            <View style={global.center}>
                <Text>No Data</Text>
            </View>
        )
    }

    const networks = data.networks.sort(sortNetworks)

    return (
        <View style={{ flex: 1 }}>
            <NetworksList networks={networks} onItemPress={navigateToDetailsScreen} />
        </View>
    )
}