import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import { HomeProps } from "."

export default function HomeScreen({ navigation }: HomeProps) {
    return (
        <View style={{ flex: 1 }}>
            <Text>Home</Text>
            <Button onPress={() => navigation.navigate('LocationDetails')} mode="contained">Click</Button>
        </View>
    )
}