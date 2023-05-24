import { View } from "react-native";
import { Text } from "react-native-paper";
import { NetworkProps } from ".";
import { useNetwork } from "../hooks/api";

export default function NetworkScreen({ route }: NetworkProps) {
    const { data } = useNetwork(route.params.id)

    return (
        <View style={{ flex: 1 }}>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    )
}