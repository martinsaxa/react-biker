import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import { HomeProps } from "."
import { useNetworks } from "../hooks/api"

export default function HomeScreen({ navigation }: HomeProps) {
    const { data } = useNetworks()

    return (
        <View style={{ flex: 1 }}>
            <Button onPress={() => navigation.navigate('LocationDetails')} mode="contained">Click</Button>
            {data && (<Text>{JSON.stringify(data)}</Text>)}
        </View>
    )
}