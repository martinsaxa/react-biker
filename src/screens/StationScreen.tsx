import { View } from "react-native";
import { Text } from "react-native-paper";
import { StationProps } from ".";

export default function StationScreen({ route }: StationProps) {

    return (
        <View style={{ flex: 1 }}>
            <Text>{route.params.station.name}</Text>
        </View>
    )
}