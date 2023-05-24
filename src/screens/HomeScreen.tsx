import { Button, Text, View } from "react-native"
import { HomeProps } from "."

export default function HomeScreen({ navigation }: HomeProps) {
    return (
        <View style={{ flex: 1 }}>
            <Text>Home</Text>
            <Button onPress={() => navigation.navigate('LocationDetails')} title="Press" />
        </View>
    )
}