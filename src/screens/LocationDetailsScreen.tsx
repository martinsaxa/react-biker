import { View } from "react-native";
import { Text } from "react-native-paper";
import { LocationDetailsProps } from ".";

export default function LocationDetailsScreen({ route }: LocationDetailsProps) {
    return (
        <View style={{ flex: 1 }}>
            <Text>{route.params.id}</Text>
        </View>
    )
}