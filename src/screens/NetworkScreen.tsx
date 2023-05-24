import { View } from "react-native";
import { Text } from "react-native-paper";
import { NetworkProps } from ".";

export default function NetworkScreen({ route }: NetworkProps) {
    return (
        <View style={{ flex: 1 }}>
            <Text>{route.params.id}</Text>
        </View>
    )
}